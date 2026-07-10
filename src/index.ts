import { readFileSync } from "node:fs";
import { join } from "node:path";

/* ── Reservierte Keys, die fromStrapi() im Frontend zurück-mappt (id/type/default).
      Vor dem Speichern in json-Feldern umbenennen, damit das Frontend die identische
      Content-Form zurückbekommt. ── */
const RENAME: Record<string, string> = { id: "fieldId", type: "fieldType", default: "defaultLabel" };
function renameReserved(value: any): any {
  if (Array.isArray(value)) return value.map(renameReserved);
  if (value && typeof value === "object") {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) out[RENAME[k] ?? k] = renameReserved(v);
    return out;
  }
  return value;
}

async function grantPublicRead(strapi: any, actions: string[]) {
  const publicRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });
  if (!publicRole) return;
  for (const action of actions) {
    const existing = await strapi
      .query("plugin::users-permissions.permission")
      .findOne({ where: { action, role: publicRole.id } });
    if (!existing) {
      await strapi
        .query("plugin::users-permissions.permission")
        .create({ data: { action, role: publicRole.id } });
    }
  }
}

async function upsertSingle(strapi: any, uid: string, data: any) {
  const existing = await strapi.documents(uid).findFirst({});
  let documentId: string;
  if (existing) {
    await strapi.documents(uid).update({ documentId: existing.documentId, data });
    documentId = existing.documentId;
  } else {
    const created = await strapi.documents(uid).create({ data });
    documentId = created.documentId;
  }
  await strapi.documents(uid).publish({ documentId });
}

async function upsertBySlug(strapi: any, uid: string, slug: string, data: any) {
  const existing = await strapi.documents(uid).findFirst({ filters: { slug } });
  let documentId: string;
  if (existing) {
    await strapi.documents(uid).update({ documentId: existing.documentId, data });
    documentId = existing.documentId;
  } else {
    const created = await strapi.documents(uid).create({ data });
    documentId = created.documentId;
  }
  await strapi.documents(uid).publish({ documentId });
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: any }) {
    if (process.env.SEED !== "1") return;

    const preparedPath = join(strapi.dirs.app.root, "data", "prepared-content.json");
    const prepared = JSON.parse(readFileSync(preparedPath, "utf8")) as {
      singleTypes: Record<string, any>;
      painPoints: any[];
      painPointsEn?: any[];
    };

    const readActions: string[] = [];

    // Single Types
    for (const [apiId, obj] of Object.entries(prepared.singleTypes)) {
      const uid = `api::${apiId}.${apiId}`;
      await upsertSingle(strapi, uid, renameReserved(obj));
      readActions.push(`${uid}.find`);
      strapi.log.info(`[seed] single type ${apiId} ✓`);
    }

    // pain-point Collection
    const ppUid = "api::pain-point.pain-point";
    for (const row of prepared.painPoints) {
      await upsertBySlug(strapi, ppUid, row.slug, renameReserved(row));
    }
    readActions.push(`${ppUid}.find`, `${ppUid}.findOne`);
    strapi.log.info(`[seed] pain-point collection: ${prepared.painPoints.length} rows ✓`);

    // pain-point-en Collection (EN-Locale)
    if (prepared.painPointsEn?.length) {
      const ppEnUid = "api::pain-point-en.pain-point-en";
      for (const row of prepared.painPointsEn) {
        await upsertBySlug(strapi, ppEnUid, row.slug, renameReserved(row));
      }
      readActions.push(`${ppEnUid}.find`, `${ppEnUid}.findOne`);
      strapi.log.info(`[seed] pain-point-en collection: ${prepared.painPointsEn.length} rows ✓`);
    }

    // Öffentliche Lese-Rechte für alle neuen Typen
    await grantPublicRead(strapi, readActions);
    strapi.log.info(`[seed] public read granted for ${readActions.length} actions ✓`);
    strapi.log.info(`[seed] DONE`);
  },
};

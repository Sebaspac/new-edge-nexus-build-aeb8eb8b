import { useEffect, useState } from "react";
import { withCmsParams } from "@/utils/cmsPreview";

/**
 * Startseiten-Inhalte live aus dem CMS (Strapi Single-Type „Home") laden.
 * --------------------------------------------------------------
 * - Quelle: `VITE_STRAPI_URL`/api/home (Controller liefert deep-populated).
 * - Ein Fetch, modulweit gecacht → alle Home-Sektionen teilen sich den Request.
 * - Rück-Mapping der Strapi-Form in die Content-Form der Website:
 *     • Component-`id` (Strapi-intern) entfernen
 *     • `[{text}]`            → `string[]`   (shared.bullet)
 *     • `fieldId/fieldType/defaultLabel` → `id/type/default` (reservierte Namen)
 *     • `clients{heading,logos}` → `clientLogosHeading` + `clientLogos`
 * - Sektionen nutzen ihn als Overlay über ihrem statischen Fallback:
 *     `const c = useHomeContent().hero ?? heroStatic;`
 *   Ohne CMS/bei Fehler bleibt der statische Content-Layer aktiv.
 * --------------------------------------------------------------
 */
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string | undefined;

/** Strapi → Content-Form (rekursiv). Auch von useCms/usePainPoints genutzt. */
export function fromStrapi(v: unknown): any {
  if (Array.isArray(v)) {
    // reine Text-Listen (shared.bullet) zurück zu string[]
    const isTextList = v.length > 0 && v.every(
      (x) => x && typeof x === "object" && "text" in (x as any) &&
        Object.keys(x as any).filter((k) => k !== "id" && k !== "text").length === 0,
    );
    if (isTextList) return (v as any[]).map((x) => x.text);
    return (v as unknown[]).map(fromStrapi);
  }
  if (v && typeof v === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
      // Strapi-interne IDs/Metadaten verwerfen (Components: nur `id`; populatete
      // Relationen bringen zusätzlich Document-Service-Felder mit).
      if (k === "id" || k === "documentId" || k === "createdAt" || k === "updatedAt" || k === "publishedAt" || k === "locale") continue;
      const key = k === "fieldId" ? "id" : k === "fieldType" ? "type" : k === "defaultLabel" ? "default" : k;
      out[key] = fromStrapi(val);
    }
    // Bild-Uploads: `<name>Media` (CMS-Upload) gewinnt über den eingebauten
    // Bild-Key/-Pfad in `<name>`; ohne Upload bleibt der eingebaute Wert.
    for (const key of Object.keys(out)) {
      if (!key.endsWith("Media")) continue;
      const base = key.slice(0, -"Media".length);
      const url = (out[key] as { url?: string } | null)?.url;
      if (url && base in out) {
        out[base] = url.startsWith("http") ? url : `${STRAPI_URL ?? ""}${url}`;
      }
      delete out[key]; // Form bleibt identisch zum statischen Content-Layer
    }
    return out;
  }
  return v;
}

export interface HomeContent {
  seo?: any; loadingAlt?: string; contact?: any; toast?: any;
  hero?: any; clientLogos?: any[]; clientLogosHeading?: any;
  impactCounter?: any; problemJourney?: any; tickerScroll?: any; cortex?: any;
  positionedForImpact?: any; horizontalScroll?: any; derSchnitt?: any;
  embeddedAI?: any; testimonialsSection?: any; threeStepsCTA?: any;
}

function mapHome(raw: any): HomeContent {
  const d = fromStrapi(raw) as any;
  const { clients, ...rest } = d;
  return {
    ...rest,
    clientLogosHeading: clients?.heading,
    clientLogos: clients?.logos,
  };
}

let cache: HomeContent | null = null;
let inflight: Promise<HomeContent | null> | null = null;
function load(): Promise<HomeContent | null> {
  if (cache) return Promise.resolve(cache);
  if (!STRAPI_URL) return Promise.resolve(null);
  if (!inflight) {
    inflight = fetch(withCmsParams(`${STRAPI_URL}/api/home`))
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((json) => (json?.data ? (cache = mapHome(json.data)) : null))
      .catch(() => null);
  }
  return inflight;
}

/** Home-Inhalte aus dem CMS; leeres Objekt, solange (oder falls) nichts geladen ist. */
export function useHomeContent(): HomeContent {
  const [data, setData] = useState<HomeContent | null>(cache);
  useEffect(() => {
    let alive = true;
    load().then((d) => {
      if (alive && d) setData(d);
    });
    return () => {
      alive = false;
    };
  }, []);
  return data ?? {};
}

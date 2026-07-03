import { useEffect, useState } from "react";
import { fromStrapi } from "@/hooks/useHomeContent";
import { withCmsParams } from "@/utils/cmsPreview";
import {
  painPoints as PP_STATIC,
  DEFAULT_PAIN_POINT as DEFAULT_STATIC,
  type PainPointContent,
} from "@/content/painPoints";

/**
 * Anwendungsfelder (Pain Points/Branchen) live aus dem CMS laden.
 * --------------------------------------------------------------
 * - Quelle: `/api/pain-points` (Collection, deep-populated, published).
 * - Baut die gleiche Map wie der statische Content-Layer:
 *   primärer `slug` + alle `aliases` zeigen auf denselben Eintrag.
 * - DEFAULT bleibt der Eintrag mit dem Slug des statischen Defaults.
 * - Ohne CMS/bei Fehler: statische Map (verhaltenserhaltend).
 * --------------------------------------------------------------
 */
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string | undefined;

type PainPointMap = Record<string, PainPointContent>;

let cache: PainPointMap | null = null;
let inflight: Promise<PainPointMap | null> | null = null;

function load(): Promise<PainPointMap | null> {
  if (cache) return Promise.resolve(cache);
  if (!STRAPI_URL) return Promise.resolve(null);
  if (!inflight) {
    inflight = fetch(withCmsParams(`${STRAPI_URL}/api/pain-points`))
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((json) => {
        const rows: unknown[] = Array.isArray(json?.data) ? json.data : [];
        if (!rows.length) return null;
        const map: PainPointMap = {};
        for (const raw of rows) {
          const row = fromStrapi(raw) as PainPointContent & { aliases?: string[] };
          if (!row?.slug) continue;
          map[row.slug] = row;
          for (const alias of row.aliases ?? []) map[alias] = row;
        }
        return Object.keys(map).length ? (cache = map) : null;
      })
      .catch(() => null);
  }
  return inflight;
}

/** Map slug→PainPoint (inkl. Alias-Slugs); Fallback: statischer Content-Layer. */
export function usePainPoints(): { map: PainPointMap; defaultPainPoint: PainPointContent } {
  const [map, setMap] = useState<PainPointMap | null>(cache);
  useEffect(() => {
    let alive = true;
    load().then((m) => {
      if (alive && m) setMap(m);
    });
    return () => {
      alive = false;
    };
  }, []);
  const effective = map ?? PP_STATIC;
  return {
    map: effective,
    defaultPainPoint: effective[DEFAULT_STATIC.slug] ?? DEFAULT_STATIC,
  };
}

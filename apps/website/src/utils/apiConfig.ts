/**
 * Basis-URL des NEWEDGE Lead-Services (VPS, FastAPI — siehe roi-report-service/).
 * --------------------------------------------------------------
 * Ein Service bedient beide Formulare, deshalb genügt EINE Netlify-Env:
 *
 *   VITE_API_URL = https://roi-api.newedgebrand.com
 *
 * Leer = Test-Modus: Formulare zeigen lokal Erfolg, senden aber nicht.
 * (Der frühere Supabase-Endpoint für das Kontaktformular ist tot — das
 * Projekt existiert nicht mehr, siehe README-DEPLOY.md im Service-Ordner.)
 * --------------------------------------------------------------
 */
const API_URL = ((import.meta.env.VITE_API_URL as string | undefined) ?? "").replace(/\/+$/, "");

/** Kontaktformular (/kontakt + ContactFormModal). Leer = Test-Modus. */
export const CONTACT_ENDPOINT = API_URL ? `${API_URL}/contact` : "";

/** ROI-Rechner: Lead + PDF-Report. Leer = Test-Modus. */
export const ROI_ENDPOINT = API_URL ? `${API_URL}/roi-report` : "";

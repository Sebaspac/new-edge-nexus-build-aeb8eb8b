import { Link, useParams } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

const LeistungenStub = () => {
  const params = useParams();
  const slug = params.slug || "";
  const [, setContactOpen] = useState(false);

  return (
    <>
      <SEOHead title="Leistung in Arbeit | New Edge" description="Diese Leistungs-Seite wird gerade ausgearbeitet." canonical="/leistungen" />
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">Leistungen</p>
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">Diese Seite wird gerade gebaut.</h1>
            <p className="text-white/60 mb-10" style={{ fontFamily: "Consolas, monospace" }}>
              {slug ? `"${slug}" – ` : ""}Wir arbeiten an der vollständigen Ausarbeitung. Schau bald wieder vorbei oder
              schreib uns direkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button className="bg-transparent backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-black rounded-none px-6 py-5">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Startseite
                </Button>
              </Link>
              <Link to="/leistungen/pain-points/auswahlverfahren">
                <Button className="bg-purple-500 text-white hover:bg-purple-600 rounded-none px-6 py-5">
                  Beispiel ansehen: Auswahlverfahren
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default LeistungenStub;

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { impressum as IMPRESSUM_STATIC } from "@/content/pages/impressum";
import { useCms } from "@/hooks/useCms";

const SectionDivider = () => (
  <div className="w-full border-t border-foreground/10 my-10 md:my-14" />
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base md:text-lg font-semibold text-foreground/80 tracking-wide mb-4">
    {children}
  </h3>
);

const Impressum = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const impressum = useCms("impressum", IMPRESSUM_STATIC);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  const { page, impressumSection: imp, datenschutzSection: ds } = impressum;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={impressum.seo.title}
        description={impressum.seo.description}
        canonical={impressum.seo.canonical}
        noindex
      />
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-10 pb-4 max-w-4xl"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("legal.backToHome")}
        </Link>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-4 leading-[0.95]"
          >
            {page.titleLine1}<br />
            {page.titleLine2}
          </motion.h1>

          <p className="text-foreground/40 text-xs uppercase tracking-widest mb-16 md:mb-20">
            {page.stand}
          </p>

          {/* ═══════════════ IMPRESSUM ═══════════════ */}
          <section>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8">
              {imp.title}
            </h2>

            {/* Angaben gemäß § 5 TMG */}
            <div className="mb-8">
              <SectionHeading>{imp.angaben.heading}</SectionHeading>
              <div className="border border-foreground/10 p-5 md:p-6">
                <p className="font-medium text-foreground">{imp.angaben.company}</p>
                <p className="text-foreground/60 mt-1">{imp.angaben.owner}</p>
                <p className="text-foreground/60">{imp.angaben.country}</p>
                <p className="text-foreground/60 mt-3">
                  {imp.angaben.emailLabel}{" "}
                  <a
                    href={imp.angaben.email.href}
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    {imp.angaben.email.label}
                  </a>
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* Geltungsbereich */}
            <div className="mb-8">
              <SectionHeading>{imp.geltungsbereich.heading}</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-3">
                {imp.geltungsbereich.intro}
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-1">
                {imp.geltungsbereich.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <SectionDivider />

            {/* Haftungsbeschränkung */}
            <div className="mb-8">
              <SectionHeading>{imp.sections[0].heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {imp.sections[0].body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* Externe Links */}
            <div className="mb-8">
              <SectionHeading>{imp.sections[1].heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {imp.sections[1].body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* Urheberrecht */}
            <div>
              <SectionHeading>{imp.sections[2].heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {imp.sections[2].body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════ DATENSCHUTZ ═══════════════ */}
          <div className="w-full border-t-2 border-foreground/20 my-16 md:my-24" />

          <section id="datenschutz">
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8">
              {ds.title}
            </h2>

            {/* 1. Verantwortlicher */}
            <div className="mb-8">
              <SectionHeading>{ds.verantwortlicher.heading}</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {ds.verantwortlicher.intro}
              </p>
              <div className="border border-foreground/10 p-5 md:p-6">
                {ds.verantwortlicher.address.map((line, i) => (
                  <p key={i} className="text-foreground/70">{line}</p>
                ))}
                <p className="text-foreground/70 mt-3">
                  {ds.verantwortlicher.emailLabel}{" "}
                  <a
                    href={ds.verantwortlicher.email.href}
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    {ds.verantwortlicher.email.label}
                  </a>
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* 2. Erhebung */}
            <div className="mb-8">
              <SectionHeading>{ds.erhebung.heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {ds.erhebung.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* 3. Server-Logfiles */}
            <div className="mb-8">
              <SectionHeading>{ds.serverLogfiles.heading}</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {ds.serverLogfiles.intro}
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-1 mb-4">
                {ds.serverLogfiles.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-foreground/70 leading-relaxed mb-2">
                {ds.serverLogfiles.after1}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {ds.serverLogfiles.after2}
              </p>
            </div>

            <SectionDivider />

            {/* 4. Kontaktaufnahme */}
            <div className="mb-8">
              <SectionHeading>{ds.kontaktaufnahme.heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {ds.kontaktaufnahme.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* 5. Meta Pixel */}
            <div className="mb-8">
              <SectionHeading>{ds.metaPixel.heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {ds.metaPixel.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p>
                  {ds.metaPixel.moreInfoLabel}{" "}
                  <a
                    href={ds.metaPixel.moreInfoLink.href}
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ds.metaPixel.moreInfoLink.label}
                  </a>
                </p>
              </div>
              <div className="border border-foreground/10 p-5 md:p-6 mt-4">
                <p className="font-medium text-foreground text-sm mb-2">{ds.metaPixel.box.title}</p>
                <p className="text-foreground/70 leading-relaxed">
                  {ds.metaPixel.box.body}
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* 6. Google Tag Manager */}
            <div className="mb-8">
              <SectionHeading>{ds.googleTagManager.heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {ds.googleTagManager.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="border border-foreground/10 p-5 md:p-6 mt-4">
                <p className="font-medium text-foreground text-sm mb-2">{ds.googleTagManager.box.title}</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-1">
                  {ds.googleTagManager.box.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-foreground/70 leading-relaxed mt-4">
                {ds.googleTagManager.moreInfoLabel}{" "}
                <a
                  href={ds.googleTagManager.moreInfoLink.href}
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ds.googleTagManager.moreInfoLink.label}
                </a>
              </p>
            </div>

            <SectionDivider />

            {/* 7. Google Analytics */}
            <div className="mb-8">
              <SectionHeading>{ds.googleAnalytics.heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {ds.googleAnalytics.intro.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-6 mb-6">
                <p className="font-medium text-foreground text-sm mb-3">{ds.googleAnalytics.purpose.title}</p>
                <div className="space-y-2 text-foreground/70 leading-relaxed">
                  {ds.googleAnalytics.purpose.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="font-medium text-foreground text-sm mb-3">{ds.googleAnalytics.data.title}</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-1">
                  {ds.googleAnalytics.data.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-foreground/10 p-5 md:p-6 mb-4">
                <p className="font-medium text-foreground text-sm mb-2">{ds.googleAnalytics.box.title}</p>
                <p className="text-foreground/70 leading-relaxed">
                  {ds.googleAnalytics.box.body}
                </p>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {ds.googleAnalytics.moreInfoLabel}{" "}
                <a
                  href={ds.googleAnalytics.moreInfoLink.href}
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ds.googleAnalytics.moreInfoLink.label}
                </a>
              </p>
            </div>

            <SectionDivider />

            {/* 8. Cookies */}
            <div className="mb-8">
              <SectionHeading>{ds.cookies.heading}</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {ds.cookies.intro}
              </p>

              <div className="mb-6">
                <p className="font-medium text-foreground text-sm mb-3">{ds.cookies.types.title}</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  {ds.cookies.types.items.map((item, i) => (
                    <li key={i}><span className="font-medium text-foreground">{item.term}</span>{item.rest}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-foreground/10 p-5 md:p-6">
                <p className="font-medium text-foreground text-sm mb-2">{ds.cookies.box.title}</p>
                <p className="text-foreground/70 leading-relaxed">
                  {ds.cookies.box.body}
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* 9. Ihre Rechte */}
            <div className="mb-8">
              <SectionHeading>{ds.rechte.heading}</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {ds.rechte.intro}
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-1 mb-4">
                {ds.rechte.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-foreground/70 leading-relaxed">
                {ds.rechte.contactLabel}{" "}
                <a
                  href={ds.rechte.email.href}
                  className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  {ds.rechte.email.label}
                </a>
              </p>
            </div>

            <SectionDivider />

            {/* 10. Datensicherheit */}
            <div className="mb-8">
              <SectionHeading>{ds.datensicherheit.heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {ds.datensicherheit.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* 11. Änderungen */}
            <div className="mb-8">
              <SectionHeading>{ds.aenderungen.heading}</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {ds.aenderungen.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* 12. Cookie-Consent */}
            <div>
              <SectionHeading>{ds.cookieConsent.heading}</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {ds.cookieConsent.intro}
              </p>
              <div className="border border-foreground/10 p-5 md:p-6">
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  {ds.cookieConsent.box.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Impressum;

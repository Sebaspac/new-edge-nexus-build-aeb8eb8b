import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Award, TrendingUp, ShieldCheck, BarChart3, Headphones, Trophy, Dumbbell, Truck, Building2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactFormModal } from "@/components/ContactFormModal";
import newEdgeLogoHorizontal from "@/assets/new-edge-logo-horizontal.png";
import { SweepButton } from "@/components/ui/SweepButton";
import foundersImg from "@/assets/team-sebastian.png";

type CategoryFilter = 'all' | 'studio' | 'lab';

interface MobileNavigationProps {
  onContactClick: () => void;
  logoSrc?: string;
  theme?: 'light' | 'dark';
  showCaseFilter?: boolean;
  activeFilter?: CategoryFilter;
  onFilterChange?: (filter: CategoryFilter) => void;
}

const filterButtons: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'Alle' },
  { key: 'studio', label: 'Studio' },
  { key: 'lab', label: 'Lab' },
];

const painPoints = [
  { to: "/loesungen/auswahlverfahren-automatisieren", label: "Auswahlverfahren & Awards", icon: Award },
  { to: "/loesungen/kundengewinnung-automatisieren", label: "Kundengewinnung & Funnel", icon: TrendingUp },
  { to: "/loesungen/compliance-automatisierung", label: "Import / Export & Compliance", icon: ShieldCheck },
  { to: "/loesungen/kpi-dashboard-echtzeit", label: "KPI-Transparenz & Reporting", icon: BarChart3 },
  { to: "/loesungen/ki-kundensupport", label: "Kundensupport mit KI", icon: Headphones },
];

const industrien = [
  { to: "/industrien/entscheidungsinstanzen", label: "Entscheidungsinstanzen", icon: Trophy },
  { to: "/industrien/local-digital-commerce", label: "Local & Digital Commerce", icon: ShoppingCart },
  { to: "/industrien/handel-supply-chain", label: "Handel & Supply Chain", icon: Truck },
  { to: "/industrien/professional-services", label: "Professional Services", icon: Building2 },
];

export const MobileNavigation = ({
  onContactClick,
  logoSrc,
  theme = 'light',
  showCaseFilter = false,
  activeFilter = 'all',
  onFilterChange
}: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const textColorSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const bgColor = isDark ? 'bg-black/90' : 'bg-white/90';

  const handleLinkClick = () => setIsOpen(false);
  const handleContactClick = () => {
    setIsOpen(false);
    setIsContactModalOpen(true);
  };

  return (
    <>
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} accentColor="#000" gradientFrom="#000" gradientTo="#333" theme="studio" />

      {/* ═══════════════ DESKTOP NAV ═══════════════ */}
      <nav
        className={`fixed left-4 right-4 z-50 mx-auto bg-[#1A1A1A] backdrop-blur-lg pointer-events-auto transition-all duration-500 ease-out shadow-2xl hidden lg:block ${isScrolled ? 'py-3 px-6' : 'py-4 px-8'}`}
        style={{ top: 'calc(var(--safe-area-top, 0px) + 16px)', maxWidth: isScrolled ? '1100px' : '1200px' }}
      >
        <div className="flex items-center justify-between w-full relative">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <img src={newEdgeLogoHorizontal} alt="New Edge" className={`transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'} w-auto`} />
            </motion.div>
          </Link>

          {/* Center: Case Filter Buttons */}
          {showCaseFilter && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
              {filterButtons.map(filter => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    onClick={() => onFilterChange?.(filter.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${isActive ? 'bg-purple-600 text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Right: Navigation Links */}
          <div className="flex items-center gap-7">
            {/* ─── Leistungen Mega Menu ─── */}
            <div className="relative group/leist">
              <button className="flex items-center gap-1 text-white hover:text-white/80 transition-all duration-300 font-medium text-sm">
                Leistungen
                <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover/leist:opacity-100 group-hover/leist:rotate-180 transition-all duration-300" />
              </button>

              {/* Mega menu dropdown — centered under nav */}
              <div className="fixed left-1/2 -translate-x-1/2 mt-[18px] w-[960px] max-w-[95vw] opacity-0 invisible group-hover/leist:opacity-100 group-hover/leist:visible transition-all duration-300 group-hover/leist:delay-75 z-[60]" style={{ top: 'calc(var(--safe-area-top, 0px) + 76px)' }}>
                {/* Invisible bridge to maintain hover */}
                <div className="absolute -top-5 left-0 right-0 h-5" />

                <div className="bg-[#141414] border border-white/[0.08] shadow-[0_25px_80px_-12px_rgba(0,0,0,0.7)]">
                  <div className="grid grid-cols-12 gap-0">

                    {/* Pain Points Column */}
                    <div className="col-span-4 p-7">
                      <div className="mb-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400" style={{ fontFamily: "Consolas, monospace" }}>
                          Pain Points
                        </p>
                        <div className="mt-2 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
                      </div>
                      <div className="space-y-0.5">
                        {painPoints.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-center gap-3 py-2.5 px-2 text-[13px] text-white/70 hover:text-white hover:bg-white/[0.04] transition-all group/item"
                          >
                            <item.icon className="w-4 h-4 text-white/30 group-hover/item:text-purple-400 transition-colors shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
                        <div className="flex gap-4">
                          <Link to="/studio" className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors">Studio</Link>
                          <Link to="/lab" className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors">Lab</Link>
                        </div>
                      </div>
                    </div>

                    {/* Industrien Column */}
                    <div className="col-span-4 p-7 border-x border-white/[0.06]">
                      <div className="mb-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400" style={{ fontFamily: "Consolas, monospace" }}>
                          Industrien
                        </p>
                        <div className="mt-2 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
                      </div>
                      <div className="space-y-0.5">
                        {industrien.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-center gap-3 py-2.5 px-2 text-[13px] text-white/70 hover:text-white hover:bg-white/[0.04] transition-all group/item"
                          >
                            <item.icon className="w-4 h-4 text-white/30 group-hover/item:text-purple-400 transition-colors shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Featured Case Column */}
                    <div className="col-span-4 p-7 bg-gradient-to-br from-purple-500/[0.06] to-transparent">
                      <div className="mb-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400" style={{ fontFamily: "Consolas, monospace" }}>
                          Success Story
                        </p>
                        <div className="mt-2 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
                      </div>
                      <Link to="/loesungen/auswahlverfahren-automatisieren" className="block group/card">
                        <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-black/60 border border-white/[0.08] mb-4 flex items-end p-3 group-hover/card:border-purple-500/30 transition-all overflow-hidden relative">
                          <img
                            src={foundersImg}
                            alt="New Edge Team"
                            className="absolute inset-0 w-full h-full object-cover object-[25%_20%] opacity-60 group-hover/card:opacity-80 transition-opacity"
                          />
                        </div>
                        <p className="text-sm text-white mb-1.5 group-hover/card:text-purple-200 transition-colors" style={{ fontFamily: "'DM Serif Display', serif" }}>
                          BMP Award — Auswahlverfahren mit KI
                        </p>
                        <p className="text-[11px] text-white/40 leading-relaxed mb-3" style={{ fontFamily: "Consolas, monospace" }}>
                          70% weniger Aufwand bei revisionssicherer Dokumentation.
                        </p>
                        <span className="text-[11px] text-purple-400 group-hover/card:text-purple-300 transition-colors inline-flex items-center gap-1" style={{ fontFamily: "Consolas, monospace" }}>
                          Case lesen →
                        </span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* ─── Company Dropdown ─── */}
            <div className="relative group/comp">
              <button className="flex items-center gap-1 text-white hover:text-white/80 transition-all duration-300 font-medium text-sm">
                Company
                <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover/comp:opacity-100 group-hover/comp:rotate-180 transition-all duration-300" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 opacity-0 invisible group-hover/comp:opacity-100 group-hover/comp:visible transition-all duration-300 group-hover/comp:delay-75 z-[60]">
                {/* Invisible bridge */}
                <div className="absolute -top-3 left-0 right-0 h-3" />
                <div className="bg-[#141414] border border-white/[0.08] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)]">
                  <div className="py-2">
                    <Link to="/about" className="flex items-center gap-3 px-5 py-3 text-[13px] text-white/70 hover:text-white hover:bg-white/[0.04] transition-all">
                      Über uns
                    </Link>
                    <Link to="/careers" className="flex items-center gap-3 px-5 py-3 text-[13px] text-white/70 hover:text-white hover:bg-white/[0.04] transition-all">
                      Careers
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <SweepButton
              onClick={() => window.open("https://calendly.com/sebastian-p-newedgebrand/30min", "_blank", "noopener")}
              sweepColor="violet"
              hoverTextColor="#ffffff"
              duration={0.52}
              style={{
                background: "#ffffff",
                color: "#1A0A2E",
                border: "none",
                fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "10px 20px",
              }}
            >
              Kontakt
            </SweepButton>
          </div>
        </div>
      </nav>

      {/* ═══════════════ MOBILE NAV HEADER ═══════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] backdrop-blur-lg pointer-events-auto lg:hidden shadow-2xl py-3 px-4"
        style={{ paddingTop: 'max(12px, calc(env(safe-area-inset-top, 0px) + 8px))' }}
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <img src={newEdgeLogoHorizontal} alt="New Edge" className="h-8 w-auto" />
            </motion.div>
          </Link>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white z-50 relative min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </nav>

      {/* ═══════════════ MOBILE MENU OVERLAY ═══════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              data-mobile-menu="open"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] ${bgColor} backdrop-blur-lg z-[60] lg:hidden shadow-2xl`}
            >
              <div className="flex flex-col h-full pt-16 pb-4">
                <div className="flex-1 px-4 space-y-0.5 overflow-y-auto">

                  {/* ─── Leistungen accordion ─── */}
                  <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    <button
                      onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                      className={`w-full flex items-center justify-between py-3 px-3 text-sm font-semibold ${textColor} uppercase tracking-wide`}
                    >
                      Leistungen
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileLeistungenOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </motion.div>

                  <AnimatePresence>
                    {mobileLeistungenOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3">
                          {/* Pain Points header */}
                          <div className="px-3 pt-2 pb-1">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400" style={{ fontFamily: "Consolas, monospace" }}>Pain Points</p>
                            <div className="mt-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
                          </div>
                          {painPoints.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={handleLinkClick}
                              className={`flex items-center gap-3 py-2.5 px-3 text-sm ${textColorSecondary} hover:bg-purple-500/10 transition-colors min-h-[44px]`}
                            >
                              <item.icon className="w-4 h-4 text-white/30 shrink-0" />
                              {item.label}
                            </Link>
                          ))}

                          {/* Industrien header */}
                          <div className="px-3 pt-4 pb-1">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400" style={{ fontFamily: "Consolas, monospace" }}>Industrien</p>
                            <div className="mt-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
                          </div>
                          {industrien.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={handleLinkClick}
                              className={`flex items-center gap-3 py-2.5 px-3 text-sm ${textColorSecondary} hover:bg-purple-500/10 transition-colors min-h-[44px]`}
                            >
                              <item.icon className="w-4 h-4 text-white/30 shrink-0" />
                              {item.label}
                            </Link>
                          ))}

                          {/* Studio / Lab */}
                          <div className="flex gap-4 px-3 pt-3 pb-2">
                            <Link to="/studio" onClick={handleLinkClick} className={`text-[10px] uppercase tracking-[0.2em] ${textColorSecondary}`}>Studio</Link>
                            <Link to="/lab" onClick={handleLinkClick} className={`text-[10px] uppercase tracking-[0.2em] ${textColorSecondary}`}>Lab</Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ─── Company accordion ─── */}
                  <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <button
                      onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                      className={`w-full flex items-center justify-between py-3 px-3 text-sm font-semibold ${textColor} uppercase tracking-wide`}
                    >
                      Company
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </motion.div>

                  <AnimatePresence>
                    {mobileCompanyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3">
                          <Link to="/about" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:bg-gray-100/10 transition-colors min-h-[44px] flex items-center`}>
                            Über uns
                          </Link>
                          <Link to="/careers" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:bg-gray-100/10 transition-colors min-h-[44px] flex items-center`}>
                            Careers
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="px-4 pt-4 border-t border-border/30 mt-4"
                >
                  <Button
                    onClick={handleContactClick}
                    className={`w-full ${isDark ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-black hover:bg-gray-800'} text-white py-3 text-base font-medium min-h-[48px]`}
                  >
                    Kontakt aufnehmen
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

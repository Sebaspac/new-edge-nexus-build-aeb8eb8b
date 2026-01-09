import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { OptimizedLogo } from "@/components/OptimizedLogo";
import { ContactFormModal } from "@/components/ContactFormModal";
type CategoryFilter = 'all' | 'studio' | 'media' | 'lab';

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
  { key: 'media', label: 'Media' },
  { key: 'lab', label: 'Lab' },
];

export const MobileNavigation = ({
  onContactClick,
  logoSrc = "/assets/93b90410-bdbd-4098-938c-5ff9f158253c.png",
  theme = 'light',
  showCaseFilter = false,
  activeFilter = 'all',
  onFilterChange
}: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const {
    language,
    setLanguage
  } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const textColorSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const bgColor = isDark ? 'bg-black/90' : 'bg-white/90';
  const borderColor = isDark ? 'border-purple-500/20' : 'border-gray-200';
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const handleContactClick = () => {
    setIsOpen(false);
    setIsContactModalOpen(true);
  };
  return <>
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} accentColor="#000" gradientFrom="#000" gradientTo="#333" theme="studio" />
      
      {/* Desktop Navigation */}
      <nav
        className={`fixed left-4 right-4 z-50 mx-auto bg-[#1A1A1A] backdrop-blur-lg pointer-events-auto transition-all duration-500 ease-out shadow-2xl hidden lg:block ${isScrolled ? 'py-3 px-6' : 'py-4 px-8'}`}
        style={{ 
          top: 'calc(var(--safe-area-top, 0px) + 16px)', 
          maxWidth: isScrolled ? '1100px' : '1200px' 
        }}
      >
        <div className="flex items-center justify-between w-full relative">
          {/* Logo + Text */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-3">
              <OptimizedLogo 
                className={`transition-all duration-500 ${isScrolled ? 'h-7 w-7' : 'h-9 w-9'}`} 
                width={isScrolled ? 28 : 36} 
                height={isScrolled ? 28 : 36} 
              />
              <div className={`font-bold text-white transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                New Edge
              </div>
            </motion.div>
          </Link>

          {/* Center: Case Filter Buttons */}
          {showCaseFilter && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
              {filterButtons.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    onClick={() => onFilterChange?.(filter.key)}
                    className={`
                      px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-purple-600 text-white' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                      }
                    `}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Right: Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-white/80 transition-all duration-300 font-medium text-sm">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#1A1A1A] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 group-hover:delay-150 backdrop-blur-lg z-[60] border border-white/10">
                <div className="py-2">
                  <Link to="/studio" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Studio
                  </Link>
                  <Link to="/media" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Media
                  </Link>
                  <Link to="/lab" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Lab
                  </Link>
                  <Link to="/products" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Agent Hub
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-white/80 transition-all duration-300 font-medium text-sm">
                Company
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#1A1A1A] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 group-hover:delay-150 backdrop-blur-lg z-[60] border border-white/10">
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    About us
                  </Link>
                  <Link to="/use-cases" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Use Cases
                  </Link>
                  <Link to="/careers" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Careers
                  </Link>
                </div>
              </div>
            </div>


            <Button 
              onClick={onContactClick} 
              className="bg-white text-black hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] font-medium text-sm" 
              size="sm"
            >
              Kontakt
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] backdrop-blur-lg pointer-events-auto lg:hidden shadow-2xl py-3 px-4"
        style={{ paddingTop: 'max(12px, calc(env(safe-area-inset-top, 0px) + 8px))' }}
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-3">
              <OptimizedLogo className="h-7 w-7" width={28} height={28} />
              <div className="text-lg font-bold text-white">
                New Edge
              </div>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <>
            {/* Background Overlay */}
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />

            {/* Mobile Menu */}
            <motion.div initial={{
          x: "100%"
        }} animate={{
          x: 0
        }} exit={{
          x: "100%"
        }} transition={{
          type: "spring",
          damping: 25,
          stiffness: 200
        }} className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] ${bgColor} backdrop-blur-lg z-[60] lg:hidden shadow-2xl`}>
              <div className="flex flex-col h-full pt-16 pb-4">
                {/* Mobile Menu Items */}
                <div className="flex-1 px-4 space-y-0.5 overflow-y-auto">
                  <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1
              }}>
                    
                  </motion.div>

                  {/* Services Section */}
                  <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.12
              }}>
                    <div className={`block py-2 px-3 text-sm font-semibold ${textColor} uppercase tracking-wide`}>
                      Services
                    </div>
                  </motion.div>
                  <div className="pl-3 space-y-0.5">
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.15
                }}>
                      <Link to="/studio" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-purple-500/10 transition-colors min-h-[44px] flex items-center`}>
                        Studio
                      </Link>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.18
                }}>
                      <Link to="/media" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-blue-500/10 transition-colors min-h-[44px] flex items-center`}>
                        Media
                      </Link>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.21
                }}>
                      <Link to="/lab" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-yellow-500/10 transition-colors min-h-[44px] flex items-center`}>
                        Lab
                      </Link>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.24
                }}>
                      <Link to="/products" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-green-500/10 transition-colors min-h-[44px] flex items-center`}>Agent Hub</Link>
                    </motion.div>
                  </div>

                  {/* Company Section */}
                  <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.27
              }}>
                    <div className={`block py-2 px-3 text-sm font-semibold ${textColor} uppercase tracking-wide`}>
                      Company
                    </div>
                  </motion.div>
                  <div className="pl-3 space-y-0.5">
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.30
                }}>
                      <Link to="/about" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-gray-100/10 transition-colors min-h-[44px] flex items-center`}>About us</Link>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.33
                }}>
                      <Link to="/use-cases" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-gray-100/10 transition-colors min-h-[44px] flex items-center`}>Use Cases</Link>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.36
                }}>
                      <Link to="/careers" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-gray-100/10 transition-colors min-h-[44px] flex items-center`}>Careers</Link>
                    </motion.div>
                  </div>

                </div>

                {/* Mobile Contact Button */}
                <motion.div initial={{
              opacity: 0,
              y: 50
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.35
            }} className="px-4 pt-4 border-t border-border/30 mt-4">
                  <Button onClick={handleContactClick} className={`w-full ${isDark ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-black hover:bg-gray-800'} text-white py-3 text-base font-medium min-h-[48px]`}>
                    Kontakt aufnehmen
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
};
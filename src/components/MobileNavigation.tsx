import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { OptimizedLogo } from "@/components/OptimizedLogo";
interface MobileNavigationProps {
  onContactClick: () => void;
  logoSrc?: string;
  theme?: 'light' | 'dark';
}
export const MobileNavigation = ({
  onContactClick,
  logoSrc = "/assets/93b90410-bdbd-4098-938c-5ff9f158253c.png",
  theme = 'light'
}: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {
    language,
    setLanguage
  } = useLanguage();
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
    // Quick scroll to contact form
    const contactSection = document.querySelector('#contact-section') || document.querySelector('[id*="contact"]') || document.querySelector('form');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll to bottom if no contact section found
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  return <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${bgColor} backdrop-blur-lg`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }} className="flex items-center z-50">
                <OptimizedLogo className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" width={32} height={32} />
                <div className={`text-lg sm:text-2xl font-bold ${textColor}`}>
                  New Edge
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              
              
              {/* Services Dropdown */}
              <div className="relative group">
                <Link to="/services" className={`${textColorSecondary} hover:${textColor} transition-all duration-300 font-medium`}>
                  Services
                </Link>
                <div className={`absolute top-full left-0 mt-2 w-52 ${bgColor} shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-lg z-50 border ${borderColor}`}>
                  <div className="py-2">
                    <Link to="/studio" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor} ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-gray-50'} transition-colors`}>
                      Studio
                    </Link>
                    <Link to="/media" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor} ${isDark ? 'hover:bg-blue-500/20' : 'hover:bg-gray-50'} transition-colors`}>
                      Media
                    </Link>
                    <Link to="/lab" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor} ${isDark ? 'hover:bg-yellow-500/20' : 'hover:bg-gray-50'} transition-colors`}>
                      Lab
                    </Link>
                    <Link to="/products" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor} ${isDark ? 'hover:bg-green-500/20' : 'hover:bg-gray-50'} transition-colors`}>Agenten</Link>
                  </div>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button className={`${textColorSecondary} hover:${textColor} transition-all duration-300 font-medium`}>
                  Company
                </button>
                <div className={`absolute top-full left-0 mt-2 w-52 ${bgColor} shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-lg z-50 border ${borderColor}`}>
                  <div className="py-2">
                    
                    <Link to="/careers" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor} ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-gray-50'} transition-colors`}>
                      Careers
                    </Link>
                    <Link to="/about" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor} ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-gray-50'} transition-colors`}>About us</Link>
                  </div>
                </div>
              </div>

              {/* Content Dropdown */}
              <div className="relative group">
                <button className={`${textColorSecondary} hover:${textColor} transition-all duration-300 font-medium`}>
                  Content
                </button>
                <div className={`absolute top-full left-0 mt-2 w-52 ${bgColor} shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-lg z-50 border ${borderColor}`}>
                  <div className="py-2">
                    
                    <Link to="/blog" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor} ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-gray-50'} transition-colors`}>Blog &amp; news</Link>
                    
                  </div>
                </div>
              </div>

              <Button onClick={onContactClick} className={`${isDark ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-black hover:bg-gray-800'} text-white transition-all duration-300 hover:scale-105`} size="sm">
                Kontakt
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-3 ${textColor} z-50 relative min-h-[48px] min-w-[48px] flex items-center justify-center`} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
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
        }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" />

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
        }} className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] ${bgColor} backdrop-blur-lg z-50 md:hidden shadow-2xl`}>
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
                    <Link to="/" onClick={handleLinkClick} className={`block py-3 px-3 text-base font-medium ${textColor} hover:bg-gray-100/10 rounded-lg transition-colors min-h-[48px] flex items-center`}>
                      Home
                    </Link>
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
                      <Link to="/studio" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-purple-500/10 rounded-lg transition-colors min-h-[44px] flex items-center`}>
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
                      <Link to="/media" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-blue-500/10 rounded-lg transition-colors min-h-[44px] flex items-center`}>
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
                      <Link to="/lab" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-yellow-500/10 rounded-lg transition-colors min-h-[44px] flex items-center`}>
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
                      <Link to="/products" onClick={handleLinkClick} className={`block py-3 px-4 ${textColorSecondary} hover:${textColor} hover:bg-green-500/10 rounded-lg transition-colors`}>Agenten</Link>
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
                      <Link to="/careers" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-gray-100/10 rounded-lg transition-colors min-h-[44px] flex items-center`}>
                        Careers
                      </Link>
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
                      <Link to="/about" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-gray-100/10 rounded-lg transition-colors min-h-[44px] flex items-center`}>
                        About & Crew
                      </Link>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.39
              }}>
                    <div className={`block py-2 px-3 text-sm font-semibold ${textColor} uppercase tracking-wide`}>
                      Content
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
                  delay: 0.42
                }}>
                      
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.45
                }}>
                      <Link to="/blog" onClick={handleLinkClick} className={`block py-2.5 px-3 text-sm ${textColorSecondary} hover:${textColor} hover:bg-gray-100/10 rounded-lg transition-colors min-h-[44px] flex items-center`}>
                        Blog
                      </Link>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.48
                }}>
                      
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
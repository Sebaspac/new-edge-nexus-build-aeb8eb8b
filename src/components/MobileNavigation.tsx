import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LazyImage } from "@/components/LazyImage";
interface MobileNavigationProps {
  onContactClick: () => void;
  logoSrc?: string;
  theme?: 'light' | 'dark';
}
export const MobileNavigation = ({
  onContactClick,
  logoSrc = "/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png",
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
    onContactClick();
  };
  return <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${bgColor} backdrop-blur-lg border-b ${borderColor}`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div whileHover={{
              scale: 1.05
            }} className="flex items-center z-50">
                <LazyImage 
                  alt="New Edge Logo" 
                  className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" 
                  src={logoSrc}
                  sizes="(max-width: 640px) 24px, 32px"
                />
                <div className={`text-lg sm:text-2xl font-bold ${textColor}`}>
                  New Edge
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link to="/" className={`${textColorSecondary} hover:${textColor.split('-')[1]} transition-all duration-300 font-medium`}>
                Home
              </Link>
              
              <Link to="/team" className={`${textColorSecondary} hover:${textColor.split('-')[1]} transition-all duration-300 font-medium`}>
                Unser Team
              </Link>
              
              <div className="relative group">
                <Link to="/services" className={`${textColorSecondary} hover:${textColor.split('-')[1]} transition-all duration-300 font-medium`}>
                  Services
                </Link>
                
                {/* Desktop Dropdown */}
                <div className={`absolute top-full left-0 mt-2 w-48 ${bgColor} border ${borderColor} shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-lg`}>
                  <div className="py-2">
                    <Link to="/studio" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor.split('-')[1]} ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-gray-50'} transition-colors`}>
                      New Edge Studio
                    </Link>
                    <Link to="/media" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor.split('-')[1]} ${isDark ? 'hover:bg-blue-500/20' : 'hover:bg-gray-50'} transition-colors`}>
                      New Edge Media
                    </Link>
                    <Link to="/lab" className={`block px-4 py-2 ${textColorSecondary} hover:${textColor.split('-')[1]} ${isDark ? 'hover:bg-yellow-500/20' : 'hover:bg-gray-50'} transition-colors`}>
                      New Edge Lab
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Language Toggle - minimal above contact */}
              

              <Button onClick={onContactClick} className={`${isDark ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-black hover:bg-gray-800'} text-white transition-all duration-300 hover:scale-105`} size="sm">
                Kontakt
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 ${textColor} z-50 relative`} aria-label="Toggle menu">
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
        }} className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] ${bgColor} backdrop-blur-lg z-50 md:hidden border-l ${borderColor} shadow-2xl`}>
              <div className="flex flex-col h-full pt-20 pb-6">
                {/* Mobile Menu Items */}
                <div className="flex-1 px-6 space-y-1">
                  <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1
              }}>
                    <Link to="/" onClick={handleLinkClick} className={`block py-4 px-4 text-lg font-medium ${textColor} hover:bg-gray-100/10 rounded-lg transition-colors border-b ${borderColor}`}>
                      Home
                    </Link>
                  </motion.div>

                  <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.13
              }}>
                    <Link to="/team" onClick={handleLinkClick} className={`block py-4 px-4 text-lg font-medium ${textColor} hover:bg-gray-100/10 rounded-lg transition-colors border-b ${borderColor}`}>
                      Unser Team
                    </Link>
                  </motion.div>

                  <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.15
              }}>
                    <Link to="/services" onClick={handleLinkClick} className={`block py-4 px-4 text-lg font-medium ${textColor} hover:bg-gray-100/10 rounded-lg transition-colors border-b ${borderColor}`}>
                      Services
                    </Link>
                  </motion.div>

                  {/* Mobile Submenu */}
                  <div className="pl-4 space-y-1">
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.2
                }}>
                      <Link to="/studio" onClick={handleLinkClick} className={`block py-3 px-4 ${textColorSecondary} hover:${textColor.split('-')[1]} hover:bg-purple-500/10 rounded-lg transition-colors`}>
                        New Edge Studio
                      </Link>
                    </motion.div>

                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.25
                }}>
                      <Link to="/media" onClick={handleLinkClick} className={`block py-3 px-4 ${textColorSecondary} hover:${textColor.split('-')[1]} hover:bg-blue-500/10 rounded-lg transition-colors`}>
                        New Edge Media
                      </Link>
                    </motion.div>

                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.3
                }}>
                      <Link to="/lab" onClick={handleLinkClick} className={`block py-3 px-4 ${textColorSecondary} hover:${textColor.split('-')[1]} hover:bg-yellow-500/10 rounded-lg transition-colors`}>
                        New Edge Lab
                      </Link>
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
            }} className="px-6 pt-6 border-t border-gray-200/20">
                  <Button onClick={handleContactClick} className={`w-full ${isDark ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-black hover:bg-gray-800'} text-white py-4 text-lg font-medium`}>
                    Kontakt aufnehmen
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
};
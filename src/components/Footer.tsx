import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { OptimizedLogo } from "./OptimizedLogo";
export const Footer = () => {
  return <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 lg:py-12">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
          {/* Logo & Slogan - Links */}
          <div className="md:max-w-xs">
            <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 md:space-x-3">
              <OptimizedLogo className="h-6 md:h-8 w-6 md:w-8" width={32} height={32} />
              <span className="text-base md:text-xl font-bold">New Edge</span>
            </a>
            <p className="text-xs md:text-sm text-gray-400 mt-2">
              Design Brands. Drive Innovation.
            </p>
          </div>

          {/* Navigation Columns - Rechts */}
          <div className="grid grid-cols-2 gap-8 md:gap-10 lg:gap-12 md:justify-self-end">
            {/* Services */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Services
              </h3>
              <ul className="space-y-2 md:space-y-2">
                <li>
                  <Link to="/studio" className="text-sm md:text-sm text-gray-300 hover:text-white transition-colors inline-block py-1">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="text-sm md:text-sm text-gray-300 hover:text-white transition-colors inline-block py-1">
                    Media
                  </Link>
                </li>
                <li>
                  <Link to="/lab" className="text-sm md:text-sm text-gray-300 hover:text-white transition-colors inline-block py-1">
                    Lab
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm md:text-sm text-gray-300 hover:text-white transition-colors inline-block py-1">
                    Agenten
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Company
              </h3>
              <ul className="space-y-2 md:space-y-2">
                <li>
                  
                </li>
                <li>
                  <Link to="/about" className="text-sm md:text-sm text-gray-300 hover:text-white transition-colors inline-block py-1">
                    About us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Content */}
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 md:mt-8 lg:mt-12 pt-4 md:pt-6 lg:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} New Edge. All rights reserved.
          </p>
          
          {/* LinkedIn Icon in der Mitte */}
          <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          
          <div className="flex space-x-4 md:space-x-6">
            <Link to="/impressum" className="text-sm md:text-sm text-gray-400 hover:text-white transition-colors inline-block py-1">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
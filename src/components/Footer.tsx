import { Link } from "react-router-dom";
import { OptimizedLogo } from "./OptimizedLogo";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Section */}
          <div className="space-y-4">
            <OptimizedLogo width={120} height={40} />
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              New Edge ist eine Creative-Tech Agentur für innovationsgetriebene Markenkommunikation.
            </p>
            {/* LinkedIn Icon */}
            <div className="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Services</h4>
            <div className="space-y-2">
              <Link to="/studio" className="block text-gray-400 hover:text-white transition-colors text-sm">
                STUDIO
              </Link>
              <Link to="/media" className="block text-gray-400 hover:text-white transition-colors text-sm">
                MEDIA
              </Link>
              <Link to="/lab" className="block text-gray-400 hover:text-white transition-colors text-sm">
                LAB
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Kontakt</h4>
            <div className="space-y-2">
              <a href="mailto:info@newedgebrand.com" className="block text-gray-400 hover:text-white transition-colors text-sm">
                info@newedgebrand.com
              </a>
              <a href="tel:+4915750998236" className="block text-gray-400 hover:text-white transition-colors text-sm">
                +49 15750998236
              </a>
              <p className="text-gray-400 text-sm">
                Deutschland
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 New Edge. Alle Rechte vorbehalten.
          </p>
          <Link to="/impressum" className="text-gray-400 hover:text-white transition-colors text-sm">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
};
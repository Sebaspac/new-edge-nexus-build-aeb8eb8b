import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import newEdgeLogoHorizontal from "@/assets/new-edge-logo-horizontal.png";
export const Footer = () => {
  return <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">
          {/* Logo & Tagline */}
          <div className="lg:max-w-xs">
            <Link to="/" className="group">
              <img src={newEdgeLogoHorizontal} alt="New Edge" className="h-8 w-auto transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Design Brands. Drive Innovation.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/studio" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      Studio
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      Media
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/lab" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      Lab
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      Agent Hub 
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      Über uns 
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      Use Cases 
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      Carreers
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ressourcen */}
            

            {/* Kontakt */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Kontakt
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@newedgebrand.com" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <Mail className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      E-Mail
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <Linkedin className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
                      LinkedIn
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} New Edge. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="text-xs md:text-sm text-gray-500 hover:text-white transition-colors">
              Impressum
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/impressum#datenschutz" className="text-xs md:text-sm text-gray-500 hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
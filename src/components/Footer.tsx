import { Link } from "react-router-dom";
import { OptimizedLogo } from "./OptimizedLogo";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-12">
          {/* Logo & Brand */}
          <div className="space-y-2 md:space-y-4 col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 md:space-x-3">
              <OptimizedLogo className="h-6 md:h-8 w-6 md:w-8" width={32} height={32} />
              <span className="text-base md:text-xl font-bold">New Edge</span>
            </Link>
            <p className="text-xs md:text-sm text-gray-400 max-w-xs hidden md:block">
              Design Brands. Drive Innovation.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
              Services
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link to="/studio" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                  Lab
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
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
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link to="/careers" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
              Content
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link to="/blog" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                  Blog & news
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 md:mt-8 lg:mt-12 pt-4 md:pt-6 lg:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} New Edge. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link to="/impressum" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
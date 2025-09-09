import { Link } from "react-router-dom";
import { OptimizedLogo } from "./OptimizedLogo";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <OptimizedLogo />
            <p className="mt-4 text-muted-foreground max-w-md">
              Innovative Lösungen für digitale Transformation und Performance Marketing.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/media" className="text-muted-foreground hover:text-foreground transition-colors">Media</Link></li>
              <li><Link to="/studio" className="text-muted-foreground hover:text-foreground transition-colors">Studio</Link></li>
              <li><Link to="/lab" className="text-muted-foreground hover:text-foreground transition-colors">Lab</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} INFINITIV. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
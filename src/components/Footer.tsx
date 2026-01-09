import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold">
                <span className="text-accent">S</span>
                <span className="text-background">emillas</span>
              </span>
              <span className="text-lg font-heading font-bold -mt-1">
                <span className="text-accent">C</span>
                <span className="text-background">anaan</span>
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-background/60 text-sm">
            La mejor opción para sembrar
          </p>

          {/* Copyright */}
          <p className="text-background/60 text-sm">
            © {currentYear} Semillas Canaan. Todos los derechos reservados.
          </p>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8">
          <p className="text-center text-background/40 text-xs">
            RUC: 80105045-6 | Pedro Juan Caballero, Paraguay
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

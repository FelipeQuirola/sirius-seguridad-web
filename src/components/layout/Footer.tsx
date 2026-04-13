import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/sirius-logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-sirius py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="SIRIUS Seguridad Integral" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Servicios de protección y vigilancia de alta calidad, garantizando la seguridad 
              y tranquilidad de nuestros clientes mediante el uso de tecnologías avanzadas y 
              recurso humano altamente capacitado.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wider text-primary mb-6">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">Nosotros</Link>
              <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</Link>
              <Link to="/certificaciones" className="text-muted-foreground hover:text-primary transition-colors">Certificaciones</Link>
              <Link to="/galeria" className="text-muted-foreground hover:text-primary transition-colors">Galería</Link>
              <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wider text-primary mb-6">
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:ventas@sinsirius.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>ventas@sinsirius.com</span>
              </a>
              <a 
                href="tel:+593993997778" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+593 993 997 778</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} SIRIUS Seguridad Integral. Todos los derechos reservados.
            </p>
            <p className="font-heading text-primary uppercase tracking-widest text-sm">
              Tu seguridad es una decisión invaluable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

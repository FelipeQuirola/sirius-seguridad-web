import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import teamImage from "@/assets/security-team.jpg";

export function AboutPreview() {
  return (
    <section className="py-24 bg-card">
      <div className="container-sirius">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={teamImage}
                alt="Equipo SIRIUS"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl uppercase mb-6">
              <span className="text-primary">SIRIUS</span> Seguridad Integral
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestra empresa proporciona servicios de protección y vigilancia de alta calidad, 
              garantizando la seguridad y tranquilidad de nuestros clientes mediante el uso de 
              tecnologías avanzadas, equipo moderno y un recurso humano altamente capacitado.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Salvaguardar la integridad personal y el patrimonio",
                "Tecnologías avanzadas y equipo moderno",
                "Recurso humano altamente capacitado",
                "Contribución a un entorno más seguro",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/nosotros">
              <Button variant="heroOutline" size="lg">
                Conocer más
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

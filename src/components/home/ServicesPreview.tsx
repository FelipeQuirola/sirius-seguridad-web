import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import physicalImg from "@/assets/security-physical.jpg";
import electronicImg from "@/assets/security-electronic.jpg";
import vipImg from "@/assets/security-vip.jpg";
import custodiaImg from "@/assets/security-custodia.jpg";
import trainingImg from "@/assets/security-training.jpg";
import monitoringImg from "@/assets/security-monitoring.jpg";

const services = [
  {
    title: "Seguridad Física",
    description: "Personal idóneo, altamente capacitado, dotado de equipo moderno para neutralizar amenazas.",
    image: physicalImg,
  },
  {
    title: "Seguridad Electrónica",
    description: "Sistema integrado de video vigilancia, alarmas y control de accesos.",
    image: electronicImg,
  },
  {
    title: "Seguridad VIP",
    description: "Protección personal de alto nivel para empresarios, diplomáticos y ejecutivos.",
    image: vipImg,
  },
  {
    title: "Custodia Armada",
    description: "Respuesta inmediata para transporte de carga y traslado de bienes.",
    image: custodiaImg,
  },
  {
    title: "Estudios de Seguridad",
    description: "Identificación de vulnerabilidades y soluciones integrales de seguridad.",
    image: trainingImg,
  },
  {
    title: "Consultoría y Capacitación",
    description: "Asesoramiento en temas críticos y formación en medidas preventivas.",
    image: monitoringImg,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container-sirius">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-tactical group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <Link to="/servicios">
            <Button variant="hero" size="lg">
              Ver todos los servicios
            </Button>
          </Link>
          <Link to="/contacto">
            <Button variant="heroOutline" size="lg">
              Contacto
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

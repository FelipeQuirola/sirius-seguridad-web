import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Target, Lock, Radio } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const pillars = [
  { icon: Shield, label: "SEGURIDAD" },
  { icon: Target, label: "COMPROMISO" },
  { icon: Eye, label: "PRECISIÓN" },
  { icon: Lock, label: "PROTECCIÓN" },
  { icon: Radio, label: "MONITOREO" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SIRIUS Seguridad"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container-sirius relative z-10 py-32">
        <div className="max-w-4xl">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-tight mb-8"
          >
            Tu seguridad es una{" "}
            <span className="text-primary">decisión invaluable</span>
          </motion.h1>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 md:gap-6 mb-12"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border backdrop-blur-sm"
              >
                <pillar.icon className="w-4 h-4 text-primary" />
                <span className="font-heading text-sm tracking-wider text-foreground/90">
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/servicios">
              <Button variant="hero" size="xl">
                Nuestros Servicios
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="heroOutline" size="xl">
                Contacto
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Tactical Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}

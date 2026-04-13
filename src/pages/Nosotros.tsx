import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, Target, Eye, Users, Heart } from "lucide-react";
import teamImage from "@/assets/security-team.jpg";

const valores = [
  {
    icon: Heart,
    title: "Integridad",
    description: "Actuamos con honestidad y ética en todas nuestras operaciones.",
  },
  {
    icon: Target,
    title: "Responsabilidad",
    description: "Nos hacemos responsables de nuestras acciones y decisiones, asegurando la máxima confiabilidad.",
  },
  {
    icon: Eye,
    title: "Compromiso",
    description: "Nos dedicamos a la satisfacción y seguridad de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description: "Fomentamos la colaboración y el respeto mutuo dentro de nuestro equipo de trabajo.",
  },
];

const objetivos = [
  "Garantizar la seguridad y protección de personas, propiedades, activos de nuestros clientes.",
  "Proporcionar servicios de alta calidad y personalizados, que se ajusten a las necesidades específica de cada cliente.",
  "Mantener una comunicación constante con nuestros clientes para entender y satisfacer sus necesidades específicas de seguridad.",
  "Mantener la confianza y satisfacción de nuestros clientes a través de un servicio excepcional.",
  "Contribuir activamente a la creación de entornos seguros y tranquilos en nuestra comunidad y en todo el país.",
];

export default function Nosotros() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 bg-card overflow-hidden">
        <div className="container-sirius">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl uppercase mb-6">
              <span className="text-primary">Nosotros</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Conozca nuestra misión, visión y los valores que nos definen como empresa líder en seguridad integral.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-background">
        <div className="container-sirius">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 border border-border"
            >
              <h2 className="font-heading text-2xl uppercase text-primary mb-6">
                Misión
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La misión de nuestra empresa es proporcionar servicios de protección y vigilancia de alta calidad, 
                garantizando la seguridad y tranquilidad de nuestros clientes mediante el uso de tecnologías avanzadas, 
                equipo moderno y un recurso humano altamente capacitado. Nos comprometemos a salvaguardar la integridad 
                personal y el patrimonio, contribuyendo así a un entorno más seguro para la sociedad ecuatoriana.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 border border-border"
            >
              <h2 className="font-heading text-2xl uppercase text-primary mb-6">
                Visión
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nuestra visión es ser la empresa líder en Ecuador y un socio estratégico para nuestros clientes, 
                brindando una excelente protección de personas y bienes, la prevención de riesgos, además de nuestra 
                capacidad para innovar y adaptarnos a las necesidades cambiantes de nuestros clientes, promoviendo 
                un entorno seguro y confiable. Buscamos impactar positivamente, mediante la contribución del bienestar 
                social, la formación continua de nuestro equipo humano y el compromiso con los más altos valores éticos 
                y profesionales para la creación de un Ecuador más seguro para todos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultura Organizacional */}
      <section className="py-24 bg-card">
        <div className="container-sirius">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl uppercase mb-6">
                Cultura <span className="text-primary">Organizacional</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La cultura de nuestra empresa se basa en la excelencia, la comunicación abierta y el respeto mutuo. 
                Valoramos a cada miembro de nuestro equipo, fomentando un ambiente de trabajo positivo y motivador. 
                Promovemos el desarrollo profesional y personal de nuestros empleados, brindando oportunidades de 
                capacitación y crecimiento. La seguridad y el bienestar de nuestros colaboradores son prioritarios, 
                así como la creación de un ambiente laboral inclusivo y equitativo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={teamImage}
                alt="Equipo SIRIUS"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-background">
        <div className="container-sirius">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4">
              Nuestros <span className="text-primary">Valores</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                  <valor.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl uppercase text-foreground mb-3">
                  {valor.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-24 bg-card">
        <div className="container-sirius">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4">
              Nuestros <span className="text-primary">Objetivos</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {objetivos.map((objetivo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-background border border-border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90">{objetivo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contacto() {
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
              <span className="text-primary">Contacto</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Estamos listos para atender sus necesidades de seguridad integral.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-background">
        <div className="container-sirius">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <motion.a
                href="mailto:ventas@sinsirius.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border p-8 hover:border-primary transition-colors group"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl uppercase text-foreground mb-2">
                  Correo Electrónico
                </h3>
                <p className="text-primary text-lg">
                  ventas@sinsirius.com
                </p>
              </motion.a>

              {/* Phone / WhatsApp */}
              <motion.a
                href="tel:+593993997778"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-border p-8 hover:border-primary transition-colors group"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl uppercase text-foreground mb-2">
                  Teléfono / WhatsApp
                </h3>
                <p className="text-primary text-lg">
                  +593 993 997 778
                </p>
              </motion.a>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <a
                href="https://wa.me/593993997778"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Contactar por WhatsApp</span>
              </a>
            </motion.div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-24 text-center"
            >
              <div className="bg-card border border-border p-12">
                <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4">
                  Tu seguridad es una{" "}
                  <span className="text-primary">decisión invaluable</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Award, Handshake } from "lucide-react";

export default function Certificaciones() {
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
              <span className="text-primary">Certificaciones</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Respaldo institucional y convenios de colaboración que avalan nuestra calidad de servicio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Convenio CISEG */}
      <section className="py-24 bg-background">
        <div className="container-sirius">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border p-8 md:p-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Handshake className="w-12 h-12 text-primary" />
              </div>
              
              <h2 className="font-heading text-2xl md:text-3xl uppercase text-center mb-8">
                Convenio de <span className="text-primary">Colaboración</span>
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-heading text-xl uppercase text-foreground">
                    SIRIUS Seguridad Integral
                  </p>
                </div>
                
                <div className="hidden md:block w-24 h-px bg-primary" />
                <div className="md:hidden h-8 w-px bg-primary" />
                
                <div className="text-center">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-heading text-xl uppercase text-foreground">
                    CISEG
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Este convenio de colaboración fortalece nuestra capacidad de ofrecer servicios de 
                  seguridad integral de alta calidad, respaldados por instituciones reconocidas en 
                  el ámbito de la seguridad profesional.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="font-heading text-primary uppercase tracking-widest">
                  Tu seguridad es una decisión invaluable
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

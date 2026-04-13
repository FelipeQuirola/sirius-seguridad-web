import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, Shield, Video, UserCheck, Truck, Search, GraduationCap } from "lucide-react";
import physicalImg from "@/assets/security-physical.jpg";
import electronicImg from "@/assets/security-electronic.jpg";
import vipImg from "@/assets/security-vip.jpg";
import custodiaImg from "@/assets/security-custodia.jpg";
import trainingImg from "@/assets/security-training.jpg";

export default function Servicios() {
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
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Soluciones integrales de seguridad adaptadas a las necesidades específicas de cada cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seguridad Física */}
      <section id="seguridad-fisica" className="py-24 bg-background">
        <div className="container-sirius">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-10 h-10 text-primary" />
                <h2 className="font-heading text-3xl uppercase">
                  Seguridad <span className="text-primary">Física</span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestro servicio de protección y seguridad está dirigido a garantizar la paz y tranquilidad 
                de nuestros clientes, a través del empleo del personal idóneo, altamente capacitado, 
                comprometido con el servicio, dotado de equipo moderno, que le permita neutralizar 
                todas las amenazas, mediante el empleo eficiente de su armamento, utilizando el uso 
                progresivo y diferenciado de la fuerza, conforme a las leyes de la constitución, con la 
                finalidad de salvaguardar la integridad personal, propia y la de terceros, así como el 
                patrimonio de nuestros clientes.
              </p>

              {/* Puesto 24 HRS */}
              <div className="bg-card p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Puesto de Servicio 24 HRS
                </h3>
                <ul className="space-y-2">
                  {[
                    "Guardia de seguridad",
                    "Arma letal y no letal",
                    "Botón de pánico",
                    "Patrullaje y respuesta armada (patrulla)",
                    "Conferencias de seguridad y prevención de riesgos",
                    "Sistema de video vigilancia",
                    "Ronda de supervisión (respuesta inmediata)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Puesto 12 HRS */}
              <div className="bg-card p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Puesto de Servicio 12 HRS
                </h3>
                <ul className="space-y-2">
                  {[
                    "Conferencias de seguridad y prevención de riesgos",
                    "Capacitación en manejo de situación de crisis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Adicionales */}
              <div className="bg-card p-6 border border-border">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Servicios Adicionales
                </h3>
                <ul className="space-y-2">
                  {[
                    "Conferencias de seguridad y prevención de riesgos",
                    "Capacitación en manejo de situación de crisis",
                    "Asesoría en temas de anti secuestro y extorsión",
                    "Planes de manejo y control de emergencias",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-28"
            >
              <div className="relative">
                <img
                  src={physicalImg}
                  alt="Seguridad Física"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seguridad Electrónica */}
      <section id="seguridad-electronica" className="py-24 bg-card">
        <div className="container-sirius">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 sticky top-28"
            >
              <div className="relative">
                <img
                  src={electronicImg}
                  alt="Seguridad Electrónica"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <Video className="w-10 h-10 text-primary" />
                <h2 className="font-heading text-3xl uppercase">
                  Seguridad <span className="text-primary">Electrónica</span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestro servicio de seguridad electrónica está encaminado a ofrecer un sistema integrado, 
                cuyas prestaciones permitan realizar una adecuada gestión de los medios tecnológicos, que 
                de forma complementaria o única permitan neutralizar las amenazas, mediante la disuasión y 
                observación en tiempo real, interacción y empleo de los equipos de disuasorios o pasivos y 
                los de protección activa, así como también equipos de reconocimiento facial, vehicular entre 
                otros, cuya finalidad es la de salvaguardar la integridad personal, propia y la de terceros, 
                así como el patrimonio de nuestros clientes.
              </p>

              {/* Sistema de Video Vigilancia */}
              <div className="bg-background p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Sistema de Video Vigilancia
                </h3>
                <ul className="space-y-2">
                  {[
                    "Instalación de cámaras de seguridad (monitoreo y vigilancia)",
                    "Control y seguimiento",
                    "Detección e intrusión",
                    "Reconocimiento facial y vehicular",
                    "Controles de acceso",
                    "Integración de otros medios tecnológicos",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sistema de Alarmas */}
              <div className="bg-background p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Sistema de Alarmas
                </h3>
                <ul className="space-y-2">
                  {[
                    "Sistemas biométricos",
                    "Sistemas de detección e intrusión",
                    "Contactos magnéticos",
                    "Detectores de ruptura de vidrio",
                    "Detectores de impacto / vibración / sísmicos / inerciales",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Barreras de Accesos */}
              <div className="bg-background p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Barreras de Accesos
                </h3>
                <ul className="space-y-2">
                  {[
                    "Controles de acceso controlado",
                    "Portones automáticos",
                    "Barras vehiculares",
                    "Barras peatonales",
                    "Cercas y vallas",
                    "Torniquetes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Barreras Perimetrales */}
              <div className="bg-background p-6 border border-border">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Barreras Perimetrales
                </h3>
                <ul className="space-y-2">
                  {[
                    "Cercos o mallas",
                    "Cercos eléctricos",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seguridad VIP */}
      <section id="seguridad-vip" className="py-24 bg-background">
        <div className="container-sirius">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <UserCheck className="w-10 h-10 text-primary" />
                <h2 className="font-heading text-3xl uppercase">
                  Seguridad <span className="text-primary">VIP</span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestro servicio de seguridad y protección de personal es de alto nivel, actualizado de acuerdo 
                a las amenazas actuales, preparados para contrarrestar los peligros constantes producto de la 
                delincuencia común y organizada, terrorismo y sus delitos conexos, con nuestro equipo de trabajo 
                altamente capacitado en tácticas y procedimientos de protección personal, contraterrorismo, 
                conducción táctica, medicina táctica, conocimiento y manejo de armas.
              </p>

              {/* A quién brindamos */}
              <div className="bg-card p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  A Quién Brindamos Seguridad
                </h3>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  Empresarios, Diplomáticos, Ejecutivos, Autoridades Gubernamentales, Personas Naturales 
                  y Jurídicas en general que requieran de servicios especiales de protección personal, 
                  ejecutando protocolos de seguridad elaborados de acuerdo al nivel de amenaza y los 
                  requerimientos del cliente, apegados a la normativa legal correspondiente.
                </p>
              </div>

              {/* Características */}
              <div className="bg-card p-6 border border-border">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Características del Servicio
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Vehículo blindado",
                    "Rastreo satelital",
                    "Conductor / Escolta armado",
                    "Asistencia técnica y táctica",
                    "Vehículo escolta",
                    "Estudio de seguridad",
                    "Respuesta armada",
                    "Asesoría contraterrorismo y antiterrorismo",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-28"
            >
              <div className="relative">
                <img
                  src={vipImg}
                  alt="Seguridad VIP"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custodia Armada */}
      <section id="custodia-armada" className="py-24 bg-card">
        <div className="container-sirius">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 sticky top-28"
            >
              <div className="relative">
                <img
                  src={custodiaImg}
                  alt="Custodia Armada"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <Truck className="w-10 h-10 text-primary" />
                <h2 className="font-heading text-3xl uppercase">
                  Custodia <span className="text-primary">Armada</span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nuestro servicio esta enfocado en brindar una respuesta inmediata que neutralice las amenazas 
                actuales a las que nuestros clientes estan expuestos durante sus actividades, como las de 
                transporte de carga, traslado de mercancías o bienes, mediante el empleo de patrullas y de 
                personal debidamente equipado y preparado, cumpliendo las funciones de escolta y custodia con 
                la finalidad salvaguardar la integridad personal, propia y la de terceros, así como el patrimonio 
                de nuestros clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Brindamos la máxima protección para su carga, bienes o patrimonio, con la reserva y confidencialidad 
                respectiva, aplicando los protocolos de seguridad necesarios de acuerdo a los niveles de riesgos 
                determinados en los estudios de seguridad, así como también los distintos cursos de acción operativos 
                en casos emergentes.
              </p>

              {/* Características */}
              <div className="bg-background p-6 border border-border">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Características del Servicio
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Patrulla escolta / Vehículo blindado",
                    "Rastreo satelital",
                    "Asistencia técnica y táctica",
                    "Conductor / Escolta armado",
                    "Estudio de riesgos",
                    "Planes de contingencia y emergencia",
                    "Custodios armados",
                    "Respuesta armada",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estudios y Capacitación */}
      <section id="estudios-capacitacion" className="py-24 bg-background">
        <div className="container-sirius">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Search className="w-10 h-10 text-primary" />
                <h2 className="font-heading text-3xl uppercase">
                  Estudios de <span className="text-primary">Seguridad</span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestros estudios de seguridad estan direccionados a solventar las problemáticas y falencias 
                en lo que respecta a la seguridad física de las actividades que nuestros clientes realizan, 
                identificar las vulnerabilidades de un sistema como tal ayuda a prevenir que accidentes o 
                incidentes se susciten, las falencias solventadas con la brevedad del caso permiten el normal 
                desenvolvimiento de las actividades sociales y económicas, nuestro estudio de seguridad tiene 
                un enfoque integral con varias soluciones que nuestro cliente podrá seleccionar de acuerdo a 
                sus necesidades.
              </p>

              {/* Asesoría */}
              <div className="bg-card p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Asesoría en Seguridad
                </h3>
                <ul className="space-y-2">
                  {[
                    "Análisis de riesgo",
                    "Protocolos de seguridad",
                    "Planes de contingencia y emergencia",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capacitación Preventiva */}
              <div className="bg-card p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Capacitación en Medidas Preventivas
                </h3>
                <ul className="space-y-2">
                  {[
                    "Gestión del riesgo",
                    "Reconocimiento de perfiles delincuenciales",
                    "Capacitación del personal",
                    "Ejecución de planes y simulacros",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Antiterrorista */}
              <div className="bg-card p-6 border border-border">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Capacitación Antiterrorista
                </h3>
                <ul className="space-y-2">
                  {[
                    "Manejo de situaciones de crisis",
                    "Reconocimiento de perfiles delincuenciales",
                    "Medidas contraterroristas",
                    "Cursos de acción ante amenazas terroristas y grupos delincuenciales",
                    "Medidas antiterroristas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-primary font-heading uppercase text-sm">
                    Duración: 40 HRS / Incluye Certificado y Simulacro
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mb-8">
                <img
                  src={trainingImg}
                  alt="Capacitación"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
              </div>

              {/* Consultoría */}
              <div className="flex items-center gap-4 mb-6 mt-16">
                <GraduationCap className="w-10 h-10 text-primary" />
                <h2 className="font-heading text-2xl uppercase">
                  Consultoría y <span className="text-primary">Capacitación</span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestro servicio de consultoría y capacitación está encaminado a ofrecer el asesoramiento 
                adecuado en temas críticos que comprometen la seguridad e integridad de nuestros clientes, 
                buscamos crear una cultura de seguridad en la sociedad, a través de conferencias, mesas de 
                trabajo, asesoramiento directo con nuestros clientes en temas específicos como la delincuencia 
                común y organizada, secuestro, extorsión, y terrorismo, antagonismos que en la actualidad 
                afectan el desarrollo normal de las actividades socio-económicas del país, por tal motivo, 
                nosotros nos comprometemos con su seguridad y bienestar.
              </p>

              {/* Asesoramiento */}
              <div className="bg-card p-6 border border-border mb-6">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Asesoramiento y Capacitación
                </h3>
                <ul className="space-y-2">
                  {[
                    "Delincuencia común y organizada (definiciones y conocimiento general)",
                    "Reconocimiento de perfiles delincuenciales",
                    "Manejo de situaciones de crisis",
                    "Defensa personal",
                    "Atención al trauma (medicina táctica)",
                    "Planes de emergencia y contingencia",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-primary font-heading uppercase text-sm">
                    Duración: 40 HRS / Incluye Certificado y Simulacro
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    También contamos con planes trimestrales, semestrales o anuales de capacitación.
                  </p>
                </div>
              </div>

              {/* Servicios Adicionales */}
              <div className="bg-card p-6 border border-border">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Servicios Adicionales
                </h3>
                <ul className="space-y-2">
                  {[
                    "Respuesta armada ante secuestro",
                    "Seguimiento y rastreo (botón de pánico)",
                    "Monitoreo y videovigilancia",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm mt-4">
                  Los servicios adicionales pueden realizarse mediante contrato por 6 meses o 1 año, 
                  los servicios pueden contratarse de forma independiente o en conjunto.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

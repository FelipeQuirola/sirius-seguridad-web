import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";

import physicalImg from "@/assets/security-physical.jpg";
import electronicImg from "@/assets/security-electronic.jpg";
import vipImg from "@/assets/security-vip.jpg";
import custodiaImg from "@/assets/security-custodia.jpg";
import trainingImg from "@/assets/security-training.jpg";
import monitoringImg from "@/assets/security-monitoring.jpg";
import teamImg from "@/assets/security-team.jpg";
import heroImg from "@/assets/hero-security.jpg";

/* =======================
   VIDEOS (van primero)
======================= */
const videoItems = [
  { src: "/videos/1.mp4", title: "Operación 1", category: "Videos" },
  { src: "/videos/2.mp4", title: "Operación 2", category: "Videos" },
  { src: "/videos/3.mp4", title: "Operación 3", category: "Videos" },
  { src: "/videos/4.mp4", title: "Operación 4", category: "Videos" },
];

/* =======================
   IMÁGENES
======================= */
const imageItems = [
  { src: physicalImg, title: "Seguridad Física", category: "Seguridad Física" },
  { src: electronicImg, title: "Sistema de Videovigilancia", category: "Seguridad Electrónica" },
  { src: vipImg, title: "Protección VIP", category: "Seguridad VIP" },
  { src: custodiaImg, title: "Custodia Armada", category: "Custodia Armada" },
  { src: trainingImg, title: "Capacitación Táctica", category: "Capacitación" },
  { src: monitoringImg, title: "Centro de Monitoreo", category: "Seguridad Electrónica" },
  { src: teamImg, title: "Equipo Profesional", category: "Personal" },
  { src: heroImg, title: "Personal de Seguridad", category: "Seguridad Física" },
];

/* =======================
   TODO JUNTO (videos primero)
======================= */
const galleryItems = [...videoItems, ...imageItems];

const categories = [
  "Todos",
  "Videos",
  "Seguridad Física",
  "Seguridad Electrónica",
  "Seguridad VIP",
  "Custodia Armada",
  "Capacitación",
  "Personal",
];

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "Todos"
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

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
              <span className="text-primary">Galería</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Operaciones, equipo, servicios y material audiovisual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-sirius">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-heading text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container-sirius">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group overflow-hidden border border-border bg-card"
              >
                {/* VIDEO */}
                {item.category === "Videos" ? (
                  <div className="w-full aspect-[9/16] bg-black">
                    <video
                      src={item.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  /* IMAGEN */
                  <div
                    className="aspect-square cursor-pointer"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="p-3">
                  <p className="font-heading text-xs uppercase text-primary">
                    {item.category}
                  </p>
                  <p className="text-sm text-foreground">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox solo para imágenes */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain"
          />
        </motion.div>
      )}
    </Layout>
  );
}

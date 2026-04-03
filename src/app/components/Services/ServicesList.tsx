"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Wedding Planner & Coordinator",
    subtitle: "Bodas de Autor",
    desc: "Especialización en bodas de playa, ciudad y destino. Nos encargamos de cada detalle, desde la permisología legal hasta la curaduría estética, garantizando una ejecución impecable.",
    tag: "WEDDINGS"
  },
  {
    title: "Social Celebrations",
    subtitle: "Momentos Íntimos",
    desc: "Eventos privados exclusivos y fiestas temáticas de alto nivel. 15 años, bautizos y comuniones diseñados bajo una narrativa sensorial única.",
    tag: "SOCIAL"
  },
  {
    title: "Corporate Events",
    subtitle: "Branding & Experiencia",
    desc: "Producción de eventos de marca, lanzamientos de productos y activaciones comerciales que conectan con la audiencia a través del neuromarketing.",
    tag: "CORPORATE"
  }
];

export default function ServicesList() {
  return (
    <section className="w-full py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative w-full grid grid-cols-1 md:grid-cols-12 items-center border-b border-neutral-800 pb-12 md:pb-24 hover:border-stone-500 transition-colors duration-500"
            >
              {/* Info del Servicio */}
              <div className="md:col-span-7 mb-8 md:mb-0">
                <span className="font-outfit text-stone-600 text-xs tracking-widest mb-4 block">
                  0{index + 1} / {service.tag}
                </span>
                <h2 className="font-syne text-3xl md:text-5xl text-stone-100 mb-6 group-hover:italic transition-all duration-500">
                  {service.title}
                </h2>
                <p className="font-outfit text-stone-400 text-lg font-light max-w-xl leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Imagen/Placeholder */}
              <div className="md:col-span-5 relative aspect-[16/9] md:aspect-square bg-neutral-900 overflow-hidden border border-neutral-800">
                {/* Overlay de Hover */}
                <div className="absolute inset-0 bg-stone-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <div className="absolute inset-0 flex items-center justify-center border-[10px] border-neutral-950 m-4">
                  <span className="font-syne text-neutral-800 text-[10px] tracking-widest uppercase italic text-center px-4">
                    {service.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
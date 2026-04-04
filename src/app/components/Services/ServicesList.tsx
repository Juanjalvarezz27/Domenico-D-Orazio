"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

const services = [
  {
    title: "Wedding Planner & Coordinator",
    subtitle: "Bodas de Autor",
    desc: "Especialización en bodas de playa, ciudad y destino. Nos encargamos de cada detalle, desde la permisología legal hasta la curaduría estética, garantizando una ejecución impecable.",
    tag: "WEDDINGS",
    imgTags: ["Ceremonia", "Detalles", "Recepción"],
    images: [null, null, null] 
  },
  {
    title: "Social Celebrations",
    subtitle: "Momentos Íntimos",
    desc: "Eventos privados exclusivos y fiestas temáticas de alto nivel. 15 años, bautizos y comuniones diseñados bajo una narrativa sensorial única.",
    tag: "SOCIAL",
    imgTags: ["Celebración", "Atmosfera", "Diseño"],
    images: [null, null, null]
  },
  {
    title: "Corporate Events",
    subtitle: "Branding & Experiencia",
    desc: "Producción de eventos de marca, lanzamientos de productos y activaciones comerciales que conectan con la audiencia a través del neuromarketing.",
    tag: "CORPORATE",
    imgTags: ["Lanzamiento", "Activación", "Marca"],
    images: ["/Lanzamiento.png", null, null] 
  }
];

export default function ServicesList() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generación ULTRA MASIVA de partículas para textura profunda
  useEffect(() => {
    const generated = Array.from({ length: 350 }).map((_, i) => {
      const sizeClass = Math.random();
      const baseSize = sizeClass > 0.8 ? 2.5 : sizeClass > 0.4 ? 1.5 : 0.8;
      
      return {
        id: i,
        size: baseSize, 
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: baseSize > 2 ? Math.random() * 15 + 10 : Math.random() * 30 + 20,
        delay: Math.random() * -30,
        opacity: sizeClass > 0.8 ? 0.3 : 0.15,
      };
    });
    setParticles(generated);
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-40 bg-stone-50 overflow-hidden antialiased border-t border-stone-200/50">
      
      {/* --- FONDO CON TORMENTA DE PARTÍCULAS NEGRAS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-neutral-900 rounded-full"
            style={{ 
              width: p.size, 
              height: p.size, 
              left: `${p.x}%`, 
              top: `${p.y}%`,
              opacity: p.opacity 
            }}
            animate={{
              y: [0, p.size > 2 ? -60 : -30, 0],
              x: [0, p.size > 2 ? 20 : 10, 0],
              opacity: [p.opacity * 0.5, p.opacity * 1.5, p.opacity * 0.5]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/40 via-transparent to-stone-50/40 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col gap-32 md:gap-56">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:items-start gap-16 lg:gap-24 group`}
              >
                
                {/* --- BLOQUE DE TEXTO --- */}
                <div className="w-full lg:w-5/12 flex flex-col pt-2 bg-stone-50/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl md:rounded-none">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-syne text-stone-200 text-5xl md:text-7xl font-bold leading-none select-none drop-shadow-sm">
                      0{index + 1}
                    </span>
                    <div className="h-[1px] w-12 bg-stone-400"></div>
                    <span className="font-outfit text-stone-600 font-medium text-xs tracking-[0.3em] uppercase">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-8 tracking-tighter leading-[1.1] drop-shadow-sm">
                    {service.title.split('&').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="italic font-light text-stone-400"> & </span>}
                      </span>
                    ))}
                  </h2>
                  
                  <p className="font-outfit text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    {service.desc}
                  </p>

                  <div className="mt-12 flex items-center gap-4">
                    <span className="font-syne text-[10px] tracking-[0.2em] uppercase italic text-stone-500 font-medium">
                      {service.subtitle}
                    </span>
                    <div className="h-[1px] flex-grow max-w-[80px] bg-stone-300"></div>
                  </div>
                </div>

                {/* --- MOSAICO DE IMÁGENES --- */}
                <div className="w-full lg:w-7/12 relative">
                  <div className="absolute inset-[-20px] bg-stone-50/40 backdrop-blur-[2px] rounded-3xl -z-10 hidden md:block"></div>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-2 relative z-0">
                    
                    {/* Imagen Principal (Índice 0) */}
                    <motion.div 
                      whileHover={{ scale: 0.98 }}
                      // CORRECCIÓN APLICADA AQUÍ: aspect-[4/5] para móvil, lg:aspect-[3/4] para escritorio
                      className="col-span-2 lg:col-span-1 lg:row-span-2 relative aspect-[4/5] lg:aspect-[3/4] bg-white border border-stone-200 overflow-hidden shadow-md flex items-center justify-center group/img"
                    >
                      {service.images[0] ? (
                        <Image 
                          src={service.images[0]} 
                          alt={service.imgTags[0]} 
                          fill 
                          className="object-cover object-center grayscale group-hover/img:grayscale-0 transition-all duration-700" 
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-stone-100/30 opacity-50"></div>
                          <span className="font-syne text-stone-400 text-xs tracking-[0.3em] uppercase italic z-10">
                            {service.imgTags[0]}
                          </span>
                        </>
                      )}
                    </motion.div>

                    {/* Imagen Secundaria 1 (Índice 1) */}
                    <motion.div 
                      whileHover={{ scale: 0.98 }}
                      className="col-span-1 relative aspect-square lg:aspect-square bg-stone-100 border border-stone-200 overflow-hidden shadow-sm flex items-center justify-center group/img"
                    >
                      {service.images[1] ? (
                        <Image 
                          src={service.images[1]} 
                          alt={service.imgTags[1]} 
                          fill 
                          className="object-cover object-center grayscale group-hover/img:grayscale-0 transition-all duration-700" 
                        />
                      ) : (
                        <span className="font-syne text-stone-500 text-[10px] tracking-[0.2em] uppercase italic text-center px-2">
                          {service.imgTags[1]}
                        </span>
                      )}
                    </motion.div>

                    {/* Imagen Secundaria 2 (Índice 2) */}
                    <motion.div 
                      whileHover={{ scale: 0.98 }}
                      className="col-span-1 relative aspect-square lg:aspect-[4/3] bg-stone-100 border border-stone-200 overflow-hidden shadow-sm flex items-center justify-center group/img"
                    >
                      {service.images[2] ? (
                        <Image 
                          src={service.images[2]} 
                          alt={service.imgTags[2]} 
                          fill 
                          className="object-cover object-center grayscale group-hover/img:grayscale-0 transition-all duration-700" 
                        />
                      ) : (
                        <span className="font-syne text-stone-500 text-[10px] tracking-[0.2em] uppercase italic text-center px-2">
                          {service.imgTags[2]}
                        </span>
                      )}
                    </motion.div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
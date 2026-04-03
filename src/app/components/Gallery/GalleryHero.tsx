"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE_BEZIER: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function GalleryHero() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * -20,
    }));
    setParticles(generated);
    setMounted(true);
  }, []);

  const textRevealVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1.4, ease: EASE_BEZIER, delay: custom * 0.1 },
    }),
  };

  return (
    // CORRECCIÓN: Usamos flex-col y justify-between para separar los bloques de forma segura
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden antialiased bg-neutral-950 pt-32 pb-8">
      
      {/* --- CAPA 1: LUZ VOLUMÉTRICA --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(40,40,40,0.4)_0%,_rgba(10,10,10,0)_80%)]"></div>

      {/* --- CAPA 2: PARTÍCULAS --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {mounted && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-stone-500 rounded-full"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, opacity: 0.15 }}
            animate={{ 
              y: [0, -40, 0], 
              x: [0, 15, 0], 
              opacity: [0.05, 0.25, 0.05] 
            }}
            transition={{ 
              duration: p.duration, 
              delay: p.delay, 
              ease: "linear", 
              repeat: Infinity 
            }}
          />
        ))}
      </div>

      {/* --- CAPA 3: MARCO ARQUITECTÓNICO --- */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-neutral-900 z-10"></div>
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-neutral-900 z-10"></div>

      {/* --- CAPA 4: TIPOGRAFÍA MONUMENTAL "FANTASMA" --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center pointer-events-none select-none">
        <span className="font-syne text-[8rem] md:text-[20rem] lg:text-[28rem] text-white/[0.02] font-bold tracking-tighter leading-none whitespace-nowrap">
          VISION
        </span>
      </div>

      {/* --- CAPA 5: CONTENIDO PRINCIPAL CENTRADO --- */}
      {/* CORRECCIÓN: flex-1 permite que esto tome el espacio central y empuje al footer hacia abajo */}
      <div className="flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto w-full px-6 relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 md:w-16 h-[1px] bg-stone-800"></div>
          <span className="font-outfit text-stone-500 tracking-[0.5em] uppercase text-[10px] md:text-xs text-center">
            04 / Archivo Visual
          </span>
          <div className="w-8 md:w-16 h-[1px] bg-stone-800"></div>
        </motion.div>

        <div className="overflow-hidden px-4 pb-4 -mb-4">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textRevealVariants}
            className="font-syne text-7xl md:text-9xl lg:text-[12rem] text-stone-100 tracking-tighter leading-none text-center"
          >
            Galería
          </motion.h1>
        </div>
        
        <div className="overflow-hidden px-6 pb-6 mt-2">
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textRevealVariants}
            className="font-syne text-3xl md:text-5xl lg:text-6xl text-stone-600 italic font-light tracking-tight text-center"
          >
            La estética del recuerdo.
          </motion.p>
        </div>
      </div>

      {/* --- CAPA 6: INDICADOR DE SCROLL ANIMADO --- */}
      {/* CORRECCIÓN: Eliminamos position: absolute y bottom-0. Ahora sigue el flujo normal del documento */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="relative z-20 flex flex-col items-center justify-center mt-8 md:mt-12"
      >
        <span className="font-outfit text-[9px] tracking-[0.3em] uppercase text-stone-700 mb-4">
          Explorar
        </span>
        <div className="w-[1px] h-16 md:h-24 bg-neutral-900 overflow-hidden relative">
          <motion.div 
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-stone-400 to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
}
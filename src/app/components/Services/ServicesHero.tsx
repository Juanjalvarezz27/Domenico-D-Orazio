"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export default function ServicesHero() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }).map((_, i) => ({
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
    hidden: { y: "120%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1.4, ease: EASE_BEZIER, delay: custom * 0.1 },
    }),
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden antialiased bg-neutral-900">
      
      {/* --- CAPA 1: IMAGEN FUNDIDA EN EL GRIS --- */}
      <div 
        className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0 opacity-20 pointer-events-none select-none"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 40%)', 
          WebkitMaskImage: '-webkit-linear-gradient(left, transparent, black 40%)' 
        }}
      >
        <Image 
          src="/Service.png" 
          alt="Atmósfera de Servicios" 
          fill 
          priority
          className="object-cover object-center grayscale mix-blend-luminosity"
        />
      </div>

      {/* --- CAPA 2: PARTÍCULAS SUTILES SOBRE EL GRIS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-stone-300 rounded-full"
            style={{ 
              width: p.size, 
              height: p.size, 
              left: `${p.x}%`, 
              top: `${p.y}%`,
              opacity: 0.15 
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* --- CAPA 3: LÍNEAS ARQUITECTÓNICAS Y LUZ --- */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-neutral-800 z-10"></div>
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-neutral-800 z-10"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_30%_50%,_transparent_0%,_rgba(23,23,23,0.8)_100%)]"></div>

      {/* --- CAPA 4: CONTENIDO PRINCIPAL --- */}
      <div className="max-w-6xl mx-auto w-full px-6 relative z-20 flex flex-col items-center">
        
        {/* Etiqueta superior mejorada (Syne + Centrado absoluto) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex items-center justify-center w-full gap-4 md:gap-6 mb-10"
        >
          <div className="w-8 md:w-16 h-[1px] bg-stone-500/50"></div>
          <span className="font-syne text-stone-300 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs text-center">
            Portafolio de Excelencia
          </span>
          <div className="w-8 md:w-16 h-[1px] bg-stone-500/50"></div>
        </motion.div>

        {/* Títulos */}
        <div className="text-center flex flex-col items-center">
          
          <div className="overflow-hidden px-4 pb-4 -mb-4">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textRevealVariants}
              className="font-syne text-7xl md:text-9xl lg:text-[10rem] text-stone-100 tracking-tighter leading-none"
            >
              Mis
            </motion.h1>
          </div>
          
          <div className="overflow-hidden px-6 pb-8 -mb-8">
            <motion.h1
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textRevealVariants}
              className="font-syne text-7xl md:text-9xl lg:text-[10rem] text-stone-400 tracking-tighter leading-[1.1] font-light italic pr-6"
            >
              Servicios
            </motion.h1>
          </div>

        </div>

        {/* Párrafo descriptivo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 font-outfit text-stone-300 text-lg md:text-2xl max-w-3xl text-center font-light leading-relaxed px-4"
        >
          Una fusión entre diseño sensorial y precisión jurídica para crear experiencias que trascienden lo ordinario.
        </motion.p>

      </div>
    </section>
  );
}
"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Definimos la estructura de la partícula
interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function SobreMiHero() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generamos las 100 partículas solo en el cliente
    const generated = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20, // Empiezan ya animadas
    }));
    setParticles(generated);
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative pt-12 md:pt-24 pb-10 md:pb-16 w-full flex flex-col items-center bg-stone-50 overflow-hidden antialiased">
      
      {/* --- CAPA DE PARTÍCULAS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-neutral-950 rounded-full"
            style={{ 
              width: p.size, 
              height: p.size, 
              left: `${p.x}%`, 
              top: `${p.y}%`,
              opacity: 0.3 
            }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0],
              opacity: [0.2, 0.5, 0.2]
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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center w-full"
      >
        
        {/* --- CABECERA CENTRADA --- */}
        <motion.div variants={itemVariants} className="w-full text-center mb-16">
          <span className="font-outfit text-stone-600 tracking-[0.4em] md:tracking-[0.6em] uppercase text-xs md:text-sm inline-block">
            El autor detrás de la experiencia
          </span>
        </motion.div>

        {/* --- LAYOUT: FOTO + TEXTO --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-16 w-full">
          
          {/* FOTO CIRCULAR */}
          <motion.div 
            variants={itemVariants}
            className="w-56 h-56 md:w-[320px] md:h-[320px] rounded-full border border-stone-200 bg-white shadow-sm flex items-center justify-center overflow-hidden relative shrink-0"
          >
            <div className="absolute inset-0 bg-stone-100 opacity-40"></div>
            <span className="font-syne text-stone-300 text-[10px] md:text-xs tracking-[0.3em] uppercase italic text-center p-8 z-10">
              Domenico <br /> Foto
            </span>
          </motion.div>

          {/* TEXTO DE MARCA CON SYNCOPATE */}
          <motion.div variants={itemVariants} className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="font-syncopate flex flex-col text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] text-stone-800 leading-[1.2] lg:leading-[1.1] uppercase tracking-tight">
              <span className="font-bold">Domenico</span>
              <span className="font-normal text-stone-400 tracking-wider">D'Orazio</span>
            </h1>
            
            <div className="h-[1px] w-16 bg-stone-300 mt-8 mb-8" />
            
            <p className="font-outfit text-stone-500 text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
              Event & Wedding Planner
            </p>
          </motion.div>
        </div>

        {/* CITA INFERIOR */}
        <motion.p 
          variants={itemVariants}
          className="font-outfit text-stone-600 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed italic text-center border-t border-stone-200/60 pt-12"
        >
          “Tengo gran experiencia y amplia trayectoria en el mundo del neuromarketing, creando experiencias sensoriales que transforman la visión.”
        </motion.p>

      </motion.div>
    </section>
  );
}
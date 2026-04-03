"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
    },
  };

  return (
    // La sección DEBE ser relative. Añadimos 'isolate' para crear un nuevo contexto de apilamiento limpio.
    <section className="relative isolate min-h-[85vh] pt-36 pb-16 md:pt-32 w-full flex flex-col items-center justify-center text-center overflow-hidden bg-neutral-950 antialiased">
      
      {/* --- CAPA DE FONDO --- */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        {/* Usamos un div con absolute y full para la textura */}
        <div className="absolute inset-0 bg-neutral-900 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950/90" />
        
        {/* IMAGEN Phone.png */}
        <motion.div
          className="absolute top-[10vh] -left-24 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[450px] h-[550px] md:w-full md:h-full max-w-none md:max-w-2xl pointer-events-none will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.15, 
            y: ["-2%", "2%", "-2%"],
            rotate: [-1.5, 1.5, -1.5]
          }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            y: { repeat: Infinity, duration: 12, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 15, ease: "easeInOut" }
          }}
        >
          <Image 
            src="/Phone.png" 
            alt="Fondo decorativo"
            fill
            priority 
            className="object-contain" 
            sizes="(max-width: 768px) 100vw, 800px" 
          />
        </motion.div>
      </motion.div>

      {/* --- CAPA DE CONTENIDO --- */}
      {/* Nos aseguramos de que este contenedor sea relativo también */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center px-4 md:px-6 w-full max-w-4xl"
      >
        <motion.div 
          variants={itemVariants}
          className="border border-stone-400 rounded-full px-8 py-2.5 mb-8 md:mb-10 shadow-sm bg-neutral-950/40"
        >
          <span className="font-outfit text-white font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Iniciemos el viaje
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="font-syne text-[2.75rem] sm:text-5xl md:text-8xl lg:text-9xl text-white mb-6 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tight w-full drop-shadow-lg"
        >
          Hablemos de tu <br />
          <span className="italic font-light text-stone-300 block mt-1 md:inline md:mt-0">próximo evento</span>
        </motion.h1>

        {/* Separador */}
        <motion.div 
          variants={{
            hidden: { width: 0, opacity: 0 },
            show: { width: "4rem", opacity: 1, transition: { duration: 1.5, ease: "circOut", delay: 1 } }
          }}
          className="h-[1px] bg-stone-500 mb-6 md:mb-10"
        />

        <motion.p 
          variants={itemVariants}
          className="font-outfit text-stone-200 text-sm md:text-lg font-light tracking-[0.1em] max-w-[280px] sm:max-w-xs md:max-w-xl mx-auto leading-relaxed drop-shadow-sm antialiased"
        >
          Estoy aquí para escuchar tu visión y transformarla en una experiencia sensorial que supere todas tus expectativas.
        </motion.p>
      </motion.div>
    </section>
  );
}
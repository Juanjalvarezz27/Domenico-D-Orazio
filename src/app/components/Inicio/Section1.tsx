"use client";

import { motion, Variants } from "framer-motion";

export default function Section1() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
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
    <section className="relative h-[calc(100vh-96px)] w-full flex flex-col items-center justify-center text-center overflow-hidden bg-neutral-950">
      
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="w-full h-full bg-neutral-900 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950/90"></div>
      </motion.div>

      <div className="absolute inset-4 md:inset-8 border border-white/10 z-10 pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center mt-[-5%] px-6 w-full max-w-5xl"
      >
        {/* Cambiado a Stone-400 */}
        <motion.h2 
          variants={itemVariants}
          className="font-outfit text-stone-400 tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] md:text-xs mb-8 md:mb-10"
        >
          Wedding & Event Planner
        </motion.h2>

        <motion.h1 
          variants={itemVariants}
          className="font-syne text-6xl md:text-8xl lg:text-[10rem] text-white mb-6 md:mb-8 leading-[0.9] drop-shadow-2xl w-full"
        >
          Domenico <br className="md:hidden" />
          {/* El italic ahora es un gris muy claro en vez de ámbar */}
          <span className="italic font-light text-stone-300">D'Orazio</span>
        </motion.h1>

        {/* Línea divisoria en gris cálido */}
        <motion.div 
          variants={{
            hidden: { width: 0, opacity: 0 },
            show: { width: "4rem", opacity: 1, transition: { duration: 1.5, ease: "circOut" } }
          }}
          className="h-[1px] bg-stone-400 mb-8 md:mb-10"
        ></motion.div>

        <motion.p 
          variants={itemVariants}
          className="font-outfit text-stone-300 text-sm md:text-xl font-light tracking-[0.15em] max-w-2xl mx-auto drop-shadow-md"
        >
          "Diseñando experiencias inolvidables que trascienden"
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 pointer-events-none"
      >
        <span className="font-outfit text-[8px] md:text-[10px] text-stone-400 tracking-[0.3em] uppercase">
          Descubre más
        </span>
        {/* Línea de scroll neutral */}
        <motion.div 
          animate={{ height: ["10px", "30px", "10px"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] bg-stone-400/50"
        ></motion.div>
      </motion.div>

    </section>
  );
}
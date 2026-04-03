"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Section3() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-neutral-950 overflow-hidden">
      
      {/* Textura sutil de fondo (para mantener coherencia con el Hero) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
      
      {/* Animación que se dispara al entrar en la pantalla */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
      >
        <span className="font-outfit text-amber-600 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
          El Siguiente Paso
        </span>
        
        <h2 className="font-syne text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
          ¿Estás listo para que tu evento se convierta en una <span className="italic font-light text-stone-300">realidad?</span>
        </h2>
        
        <p className="font-outfit text-stone-400 text-sm md:text-base font-light tracking-widest mb-14 max-w-xl">
          Diseñemos juntos una experiencia sensorial que tú y tus invitados atesorarán para siempre.
        </p>

        {/* Botón Premium con efecto de barrido en el Hover */}
        <Link
          href="/home/contacto"
          className="group relative overflow-hidden font-outfit text-xs font-bold tracking-[0.25em] text-neutral-900 bg-amber-500 px-12 py-5 transition-colors duration-500 hover:text-white"
        >
          <span className="relative z-10">CONTÁCTAME HOY</span>
          {/* El fondo oscuro que barre de izquierda a derecha al hacer hover */}
          <div className="absolute inset-0 h-full w-full bg-neutral-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
        </Link>
      </motion.div>
    </section>
  );
}
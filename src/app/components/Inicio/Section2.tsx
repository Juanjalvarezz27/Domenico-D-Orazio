"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Section2() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"], 
  });

  const topPosition = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  const xDesktop = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["0%", "150%", "0%", "-150%", "0%"]);
  const xMobile = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["0px", "25px", "0px", "-15px", "0px"]);

  const fases = [
    {
      num: "1",
      titulo: "Consulta Inicial",
      desc: "Nos reuniremos, y así podré entender tu visión, y con mi ayuda volverla realidad.",
      imgMargin: "md:ml-auto",
    },
    {
      num: "2",
      titulo: "Planificación y Diseño",
      desc: "Desarrollaremos el concepto creativo, y toda la logística técnica de tu evento.",
      imgMargin: "md:mr-auto",
    },
    {
      num: "3",
      titulo: "Coordinación del Evento",
      desc: "Gestión total del evento, para que tú solo te dediques a disfrutar de ese día inolvidable.",
      imgMargin: "md:ml-auto",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-40 px-4 md:px-6 overflow-hidden bg-stone-50">
      
      <div className="max-w-6xl mx-auto relative">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-28 md:mb-40 relative flex flex-col items-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[70px] md:text-[140px] font-syne font-bold text-stone-200/40 pointer-events-none z-[-1] tracking-widest whitespace-nowrap">
            JOURNEY
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 md:w-16 bg-stone-300"></div>
            <span className="font-outfit text-[10px] md:text-xs tracking-[0.4em] text-stone-500 font-bold uppercase">
              Metodología
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-stone-300"></div>
          </div>

          <h2 className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold text-stone-800 mb-8 tracking-tighter leading-none">
            THE <span className="italic font-light text-stone-400">PROCESS</span>
          </h2>

          <p className="font-outfit text-stone-500 text-lg md:text-2xl font-light max-w-2xl mx-auto tracking-wide leading-relaxed drop-shadow-sm">
            Te acompañaré en <span className="font-medium text-stone-800">cada paso</span>, para que tu evento quede atesorado como una <span className="italic text-stone-600">experiencia inolvidable</span>.
          </p>
        </motion.div>

        <div className="relative w-full pl-24 md:pl-0" ref={containerRef}>
          
          <div className="absolute top-0 bottom-0 left-10 md:left-1/2 w-[1px] bg-gradient-to-b from-transparent via-stone-300 to-transparent transform md:-translate-x-1/2"></div>

          {/* ELEMENTO MÓVIL */}
          <motion.div 
            className="md:hidden absolute left-10 w-20 h-20 -ml-10 z-50 pointer-events-none"
            style={{ top: topPosition, x: xMobile }} 
          >
            <div className="relative w-full h-full flex items-center justify-center p-2 rounded-full backdrop-blur-md bg-white/60 border border-stone-200 shadow-xl">
              <Image 
                src="/Elemento4.png" 
                alt="Icono" 
                fill 
                sizes="(max-width: 768px) 80px, 128px"
                className="object-contain p-2" 
              />
            </div>
          </motion.div>

          {/* ELEMENTO ESCRITORIO */}
          <motion.div 
            className="hidden md:block absolute left-1/2 w-32 h-32 -ml-16 z-50 pointer-events-none"
            style={{ top: topPosition, x: xDesktop }} 
          >
            <div className="relative w-full h-full flex items-center justify-center p-2 rounded-full backdrop-blur-md bg-white/50 border border-stone-200 shadow-2xl">
              <Image 
                src="/Elemento4.png" 
                alt="Icono" 
                fill 
                sizes="(max-width: 768px) 80px, 128px"
                className="object-contain p-3" 
              />
            </div>
          </motion.div>

          <div className="space-y-32 md:space-y-48 relative z-10">
            {fases.map((fase, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={fase.num} className="relative flex flex-col md:flex-row items-start md:items-center w-full gap-8 md:gap-16">
                  
                  <div className={`absolute top-0 md:top-1/2 md:-translate-y-1/2 text-[100px] md:text-[250px] font-syne font-bold text-stone-200/60 z-[-1] pointer-events-none ${isEven ? 'left-0 md:left-0' : 'right-0 md:right-0'} opacity-50 md:opacity-100`}>
                    0{fase.num}
                  </div>
                  
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:text-right md:items-end' : 'md:text-left md:items-start md:order-2'}`}>
                    <span className="font-outfit text-stone-400 text-sm font-bold tracking-[0.2em] mb-2 md:mb-4">
                      FASE {fase.num}
                    </span>
                    <h3 className="font-syne text-3xl md:text-5xl font-bold text-stone-800 mb-4 md:mb-6 leading-tight max-w-sm">
                      {fase.titulo}
                    </h3>
                    <p className="font-outfit text-stone-500 text-base md:text-lg leading-relaxed font-light max-w-sm">
                      {fase.desc}
                    </p>
                  </div>

                  <div className={`w-full md:w-1/2 mt-4 md:mt-0 ${isEven ? '' : 'md:order-1'}`}>
                    <div className={`w-full max-w-sm aspect-[4/5] bg-stone-200/50 relative overflow-hidden shadow-xl ${fase.imgMargin}`}>
                      <div className="absolute inset-0 flex items-center justify-center border border-stone-300 m-4 transition-colors duration-500 hover:border-stone-400">
                        <span className="font-outfit text-stone-400 tracking-widest text-xs md:text-sm uppercase text-center px-4">
                          Foto {fase.titulo}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
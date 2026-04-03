"use client";

import { useRef } from "react";
// Importamos useSpring para agregar fluidez
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Flecha Botánica Orgánica (Trazo 1.5)
const ElegantBotanicalPointer = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 2 C 35 20, 5 45, 20 76"
      stroke="currentColor"
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path
      d="M20 76 C 10 65, 4 58, 6 52 C 10 56, 16 68, 20 76"
      stroke="currentColor"
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
    <path
      d="M20 76 C 30 65, 36 58, 34 52 C 30 56, 24 68, 20 76"
      stroke="currentColor"
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function Section2() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Obtenemos el progreso crudo del scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"], 
  });

  // 2. EL SECRETO DE LA FLUIDEZ: Envolvemos el scroll en un "Spring" (Amortiguador)
  // Esto elimina cualquier salto y hace que la animación corra a 60fps constantes.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // Fuerza del resorte (qué tan rápido persigue al scroll)
    damping: 30,    // Fricción (evita que rebote)
    restDelta: 0.001
  });

  // 3. Alimentamos los transformadores con el progreso SUAVIZADO, no el crudo.
  const topPosition = useTransform(smoothProgress, [0, 1], ["0%", "90%"]);

  const xDesktop = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0%", "150%", "0%", "-150%", "0%"] 
  );
  
  const xMobile = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0px", "25px", "0px", "-15px", "0px"] 
  );

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
    <section className="relative w-full py-24 md:py-40 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-stone-50 via-amber-50/20 to-stone-50">
      
      <div className="max-w-6xl mx-auto relative antialiased">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-28 md:mb-40 relative flex flex-col items-center px-4"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[70px] md:text-[140px] font-syne font-bold text-stone-200/40 pointer-events-none z-[-1] tracking-widest whitespace-nowrap">
            JOURNEY
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 md:w-16 bg-stone-300 opacity-60"></div>
            <span className="font-outfit text-[10px] md:text-xs tracking-[0.4em] text-stone-500 font-bold uppercase antialiased">
              Metodología
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-stone-300 opacity-60"></div>
          </div>

          <h2 className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold text-stone-800 mb-8 tracking-tighter leading-none antialiased">
            THE <span className="italic font-light text-stone-400 antialiased">PROCESS</span>
          </h2>

          <p className="font-outfit text-stone-500 text-lg md:text-2xl font-light max-w-2xl mx-auto tracking-wide leading-relaxed drop-shadow-sm antialiased">
            Te acompañaré en <span className="font-medium text-stone-800 antialiased">cada paso</span>, para que tu evento quede atesorado como una <span className="italic text-stone-600 antialiased">experiencia inolvidable</span>.
          </p>
        </motion.div>

        <div className="relative w-full pl-24 md:pl-0" ref={containerRef}>
          
          <div className="absolute top-0 bottom-0 left-10 md:left-1/2 w-[1px] bg-gradient-to-b from-transparent via-stone-200 to-transparent transform md:-translate-x-1/2"></div>

          {/* Agregamos will-change-transform para decirle al navegador que renderice esto por GPU */}
          <motion.div 
            className="md:hidden absolute left-10 w-16 h-24 -ml-8 z-50 pointer-events-none flex items-center justify-center will-change-transform"
            style={{ top: topPosition, x: xMobile }} 
          >
            <ElegantBotanicalPointer className="w-10 h-16 text-stone-500 drop-shadow-sm" />
          </motion.div>

          <motion.div 
            className="hidden md:block absolute left-1/2 w-24 h-32 -ml-12 z-50 pointer-events-none items-center justify-center will-change-transform"
            style={{ top: topPosition, x: xDesktop }} 
          >
            <ElegantBotanicalPointer className="w-14 h-24 text-stone-500 drop-shadow-sm" />
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
                    <span className="font-outfit text-stone-500 text-sm font-bold tracking-[0.2em] mb-2 md:mb-4">
                      FASE {fase.num}
                    </span>
                    <h3 className="font-syne text-3xl md:text-5xl font-bold text-stone-800 mb-4 md:mb-6 leading-tight max-w-sm antialiased">
                      {fase.titulo}
                    </h3>
                    <p className="font-outfit text-stone-600 text-base md:text-lg leading-relaxed font-light max-w-sm">
                      {fase.desc}
                    </p>
                  </div>

                  <div className={`w-full md:w-1/2 mt-4 md:mt-0 ${isEven ? '' : 'md:order-1'}`}>
                    <div className={`w-full max-w-sm aspect-[4/5] bg-stone-100 relative overflow-hidden shadow-xl border border-stone-100 ${fase.imgMargin}`}>
                      <div className="absolute inset-0 flex items-center justify-center m-4 border border-dashed border-stone-300 opacity-60">
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
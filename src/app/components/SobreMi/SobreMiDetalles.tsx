"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"; // IMPORTANTE: Agregamos el componente Image

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function SobreMiDetalles() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    }));
    setParticles(generated);
    setMounted(true);
  }, []);

  // Agregamos imgSrc a cada sección apuntando a tu carpeta public/sobremi
  const secciones = [
    {
      id: "01",
      titulo: "Experiencia & Visión",
      desc: "Event and Wedding planner certificado con más de 6 años transformando visiones en experiencias impecables, desde bodas íntimas hasta grandes eventos corporativos.",
      imgTag: "Creative Director",
      align: "left",
      imgSrc: "/sobremi/1.jpg" // Ruta de tu imagen
    },
    {
      id: "02",
      titulo: "Seguridad Jurídica",
      desc: "Abogado de profesión. Mi ventaja competitiva es garantizarte una gestión legal absoluta en contratos y permisología, protegiendo tu inversión en cada firma.",
      imgTag: "Legal Advisor",
      align: "right",
      imgSrc: "/sobremi/2.jpg" // Ruta de tu imagen
    },
    {
      id: "03",
      titulo: "Neuromarketing",
      desc: "Diseño a través de los sentidos. Creo atmósferas sensoriales que conectan emocionalmente con cada invitado, logrando que tu evento trascienda en el tiempo.",
      imgTag: "Sensory Design",
      align: "left",
      imgSrc: "/sobremi/3.jpg" // Ruta de tu imagen
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-neutral-950 overflow-hidden antialiased">
      
      {/* --- CAPA DE PARTÍCULAS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-stone-500 rounded-full"
            style={{ 
              width: p.size, 
              height: p.size, 
              left: `${p.x}%`, 
              top: `${p.y}%`,
              opacity: 0.15 
            }}
            animate={{
              x: [0, 15, -15, 0],
              y: [0, -15, 15, 0],
              opacity: [0.1, 0.25, 0.1]
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

      <div className="relative z-10">
        {/* TÍTULO DE IMPACTO */}
        <div className="max-w-6xl mx-auto px-6 mb-20 md:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-syne text-3xl md:text-5xl text-stone-200 leading-tight tracking-tighter">
              La excelencia <span className="italic font-light text-stone-500">no es un acto,</span> <br className="hidden md:block" />
              es un hábito.
            </h2>
            <div className="h-[1px] w-12 bg-neutral-800 mt-8 mx-auto"></div>
          </motion.div>
        </div>

        {/* CONTENEDOR DE SECCIONES CON LÍNEA CENTRAL CORREGIDA */}
        <div className="max-w-6xl mx-auto px-6 relative">
          
          {/* Línea vertical central visible pero elegante */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800/50 hidden md:block transform md:-translate-x-1/2 z-0" />

          <div className="space-y-24 md:space-y-40 relative z-10">
            {secciones.map((sec) => (
              <div 
                key={sec.id}
                // Agregamos 'group' aquí para que el hover afecte tanto al texto como a la imagen
                className={`flex flex-col ${sec.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20 relative group`}
              >
                
                {/* --- IMAGEN CON NEXT/IMAGE --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1 }}
                  className="w-full md:w-[40%] aspect-[4/5] bg-neutral-900 relative shadow-2xl overflow-hidden border border-neutral-800"
                >
                  <Image 
                    src={sec.imgSrc}
                    alt={`Representación de ${sec.titulo}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                  
                  {/* Capa de oscurecimiento para no desentonar con el fondo dark (se aclara en hover) */}
                  <div className="absolute inset-0 bg-neutral-950/30 pointer-events-none transition-opacity duration-700 group-hover:opacity-10"></div>

                  {/* Etiqueta flotante */}
                  <div className="absolute bottom-6 left-6 border border-white/20 bg-neutral-950/40 backdrop-blur-md px-4 py-2 transition-all duration-500 group-hover:bg-neutral-950/60 group-hover:border-white/40">
                    <span className="font-syne text-stone-200 text-[9px] tracking-[0.4em] uppercase italic drop-shadow-lg">
                      {sec.imgTag}
                    </span>
                  </div>
                </motion.div>

                {/* --- TEXTO --- */}
                <motion.div 
                  initial={{ opacity: 0, x: sec.align === 'left' ? 15 : -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-[50%] flex flex-col relative"
                >
                  {/* Número decorativo sutil */}
                  <span className="absolute -top-12 -left-4 md:-left-10 font-syne text-7xl md:text-9xl text-white/[0.05] font-bold leading-none select-none z-0 transition-colors duration-500 group-hover:text-white/[0.1]">
                    {sec.id}
                  </span>

                  <div className="relative z-10">
                    <h3 className="font-syne text-2xl md:text-4xl text-stone-200 mb-5 tracking-tight font-medium">
                      {sec.titulo}
                    </h3>
                    <p className="font-outfit text-stone-400 text-base md:text-xl leading-relaxed font-light max-w-sm transition-colors duration-500 group-hover:text-stone-300">
                      {sec.desc}
                    </p>
                    
                    {/* Calidad de marca más discreta */}
                    <div className="mt-8 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-[1px] w-6 bg-stone-500"></div>
                      <span className="font-outfit text-[9px] tracking-[0.2em] uppercase text-stone-200">
                        D'Orazio Quality
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-24 opacity-20">
         <div className="w-1.5 h-1.5 rotate-45 border border-stone-600" />
      </div>

    </section>
  );
}
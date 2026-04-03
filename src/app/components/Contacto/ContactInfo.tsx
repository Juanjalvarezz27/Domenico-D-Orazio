"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  const contactLinks = [
    {
      id: "01",
      label: "CORREO ELECTRÓNICO",
      value: "Domejosedome12@gmail.com",
      href: "mailto:Domejosedome12@gmail.com",
    },
    {
      id: "02",
      label: "WHATSAPP / TELÉFONO",
      value: "+58 412-6900224",
      href: "https://wa.me/584126900224?text=Hola%20Domenico,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20para%20planificar%20mi%20evento.",
    },
    {
      id: "03",
      label: "INSTAGRAM (EVENTOS)",
      value: "@domenicodorazioevents",
      href: "https://www.instagram.com/domenicodorazioevents?igsh=MTlrcmFmYnlrNnplbQ==",
    },
    {
      id: "04",
      label: "INSTAGRAM (PERSONAL)",
      value: "@domenicodorazio_",
      href: "https://www.instagram.com/domenicodorazio_/",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* --- EL DIRECTORIO CENTRADO --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full max-w-4xl mx-auto"
        >
          {/* Línea superior del directorio */}
          <div className="w-full h-[1px] bg-stone-300 mb-2 md:mb-4"></div>

          {contactLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              // Hover group con transición suave en el borde
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 md:py-10 border-b border-stone-200 hover:border-stone-500 transition-colors duration-500 w-full"
            >
              {/* Lado Izquierdo: Número y Etiqueta */}
              <div className="flex items-center gap-4 md:gap-8 mb-2 md:mb-0 transform transition-transform duration-500 group-hover:translate-x-2">
                <span className="font-outfit text-xs text-stone-400 tracking-[0.2em] w-6 hidden md:block">
                  {link.id}
                </span>
                <h3 className="font-syne text-xl sm:text-2xl md:text-3xl lg:text-4xl text-stone-800 font-medium group-hover:text-stone-500 transition-colors duration-500">
                  {link.label}
                </h3>
              </div>

              {/* Lado Derecho: Valor y Flecha animada */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 w-full md:w-auto">
                <span className="font-outfit text-sm md:text-base text-stone-500 font-light tracking-wide group-hover:text-stone-900 transition-colors duration-500 truncate max-w-[200px] sm:max-w-xs md:max-w-none">
                  {link.value}
                </span>
                
                {/* Flecha SVG minimalista: Aparece y se desliza en hover */}
                <div className="w-6 h-6 overflow-hidden relative flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-stone-800">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"/>
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* --- FOOTER LLAMATIVO (Con base en Venezuela...) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          // Fondo más elegante con bordes refinados
          className="mt-24 md:mt-40 relative w-full overflow-hidden bg-white/50 backdrop-blur-sm border border-stone-200/60 flex flex-col items-center justify-center text-center py-20 md:py-32 shadow-sm rounded-sm"
        >
          {/* Marca de agua de fondo gigante - Ajustada para no desbordar (overflow-hidden en el padre) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
            <span className="font-syne text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold tracking-tighter leading-none whitespace-nowrap text-stone-900">
              VENEZUELA
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center px-4">
            {/* Pequeño adorno superior (diamante minimalista) */}
            <div className="w-1.5 h-1.5 rotate-45 bg-stone-400 mb-8 md:mb-10"></div>
            
            <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-4 tracking-tight drop-shadow-sm">
              Con base en Venezuela,
            </h3>
            
            <p className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-500 italic font-light tracking-wide drop-shadow-sm">
              disponible para el mundo.
            </p>
            
            {/* Pequeño adorno inferior para balance visual */}
            <div className="w-8 h-[1px] bg-stone-300 mt-8 md:mt-12"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
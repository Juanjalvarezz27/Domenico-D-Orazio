import SobreMiHero from "../../components/SobreMi/SobreMiHero";
import SobreMiDetalles from "../../components/SobreMi/SobreMiDetalles";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SobreMiPage() {
  return (
    <main className="flex flex-col bg-stone-50 min-h-screen selection:bg-stone-200 selection:text-stone-900">
      
      {/* 1. Encabezado Editorial con tu nombre y frase de Neuromarketing */}
      <SobreMiHero />

      {/* 2. Cuerpo de la biografía: Trayectoria y Valor Legal como Abogado */}
      <SobreMiDetalles />

      {/* 3. SECCIÓN DE CIERRE (Call to Action) 
          Diseñada para que el flujo de lectura termine en una invitación personal */}
      <section className="w-full py-32 bg-stone-50 border-t border-stone-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="flex justify-center mb-10">
            <div className="h-[1px] w-12 bg-stone-300 self-center"></div>
            <div className="mx-4 w-2 h-2 rotate-45 border border-stone-400"></div>
            <div className="h-[1px] w-12 bg-stone-300 self-center"></div>
          </div>

          <h2 className="font-syne text-4xl md:text-6xl text-stone-800 mb-8 tracking-tight leading-tight">
            ¿Listo para dar el <br />
            <span className="italic font-light text-stone-400">siguiente paso?</span>
          </h2>

          <p className="font-outfit text-stone-500 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Más que un planificador, seré tu aliado general en cada etapa de este viaje creativo y legal.
          </p>

          <Link 
            href="/home/contacto"
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-stone-900 text-stone-50 overflow-hidden rounded-full transition-all duration-500 hover:bg-stone-800"
          >
            <span className="relative z-10 font-outfit tracking-[0.2em] text-xs uppercase font-bold">
              Hablemos de tu visión
            </span>
            {/* Pequeño brillo/flecha animada en el botón */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </Link>
          
        </div>
      </section>


    </main>
  );
}
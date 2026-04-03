import ServicesHero from "../../components/Services/ServicesHero";
import ServicesList from "../../components/Services/ServicesList";

export default function ServiciosPage() {
  return (
    <main className="flex flex-col bg-stone-50 min-h-screen">
      <ServicesHero />
      <ServicesList />

      {/* Cierre Editorial / Sello de Marca (Mucho más compacto) */}
      <section className="relative py-16 md:py-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden flex flex-col items-center justify-center antialiased">
        
        {/* Monograma de fondo ajustado al nuevo tamaño */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
          <span className="font-syne text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter">
            D'O
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          {/* Etiqueta superior con menos margen */}
          <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
            <div className="h-[1px] w-8 md:w-16 bg-stone-800"></div>
            <span className="font-outfit text-stone-500 text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase">
              La Visión Final
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-stone-800"></div>
          </div>

          {/* Título de impacto */}
          <h2 className="font-syne text-4xl md:text-6xl lg:text-[6rem] text-stone-100 tracking-tighter leading-[0.9]">
            Diseñemos algo <br />
            <span className="italic font-light text-stone-500">extraordinario.</span>
          </h2>
          
          {/* Firma de Autor pegada al texto */}
          <div className="flex flex-col items-center justify-center mt-12 md:mt-16">
            {/* Línea vertical más corta y sutil */}
            <div className="w-px h-10 md:h-16 bg-gradient-to-b from-stone-700 to-transparent mb-6"></div>
            
            <p className="font-syne text-stone-300 text-xs md:text-sm tracking-[0.4em] uppercase mb-2">
              Domenico D'Orazio
            </p>
            <p className="font-outfit text-stone-600 text-[9px] tracking-[0.3em] uppercase">
              Certified Event & Wedding Planner
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
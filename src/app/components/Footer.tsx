export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-stone-200 py-12 md:py-16 flex flex-col items-center justify-center antialiased">
      
      {/* Marca Principal */}
      <div className="flex flex-col items-center justify-center text-center px-6">
        <span className="font-syne text-5xl md:text-[7rem] lg:text-[9rem] text-stone-900 font-bold tracking-tighter leading-none">
          D'ORAZIO
        </span>
        <span className="font-outfit text-stone-400 text-[10px] md:text-xs tracking-[0.5em] uppercase mt-4 md:mt-6">
          Event & Wedding Planner
        </span>
      </div>

      {/* Firma del Desarrollador (Interactiva) */}
      <div className="mt-12 md:mt-16 px-6 text-center">
        <p className="font-outfit text-[9px] md:text-[10px] text-stone-500 tracking-[0.2em] md:tracking-[0.3em] uppercase">
          Desarrollado por Juan Álvarez 
          
          <span className="mx-2 text-stone-300">|</span> 
          
          <a 
            href="https://wa.me/584129164371" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors duration-300"
          >
            +58 412 9164371
          </a> 
          
          <span className="mx-2 text-stone-300">|</span> 
          
          <a 
            href="https://www.instagram.com/juanjalvarezz/?hl=es" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors duration-300"
          >
            IG: @Juanjalvarezz
          </a>
        </p>
      </div>

    </footer>
  );
}
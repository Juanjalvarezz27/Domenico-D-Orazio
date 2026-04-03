import Navbar from "./components/Navbar"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">

      {/* 2. Hero Section (Inicio) */}
      <section id="home" className="relative h-[80vh] bg-neutral-900 flex items-center justify-center overflow-hidden">
        {/* Aquí irá la foto espectacular de fondo, por ahora un placeholder oscuro */}
        <div className="absolute inset-0 bg-neutral-800"></div>
        
        {/* Contenido del Hero sobre la imagen */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-syne text-6xl md:text-8xl text-white mb-4">
            Domenico D'Orazio
          </h1>
          <p className="font-outfit text-stone-200 tracking-[0.2em] uppercase text-sm md:text-base mb-8">
            Wedding and event planner
          </p>
          <div className="w-16 h-[1px] bg-white/50 mx-auto mb-8"></div>
          <p className="font-syne text-xl md:text-3xl text-white italic font-light max-w-2xl mx-auto">
            "Diseñando experiencias inolvidables que trascienden"
          </p>
        </div>
      </section>

      {/* 3. Sección temporal para que puedas hacer scroll */}
      <section className="h-screen flex items-center justify-center">
        <p className="font-outfit text-neutral-400">Siguiente sección: About Me</p>
      </section>
    </main>
  );
}
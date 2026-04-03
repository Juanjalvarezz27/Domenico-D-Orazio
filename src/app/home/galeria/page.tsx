import GalleryHero from "../../components/Gallery/GalleryHero";
import GalleryGrid from "../../components/Gallery/GalleryGrid";

export default function GaleriaPage() {
  return (
    <main className="flex flex-col bg-neutral-950 min-h-screen">
      
      {/* 1. Encabezado inmersivo */}
      <GalleryHero />

      {/* 2. Mosaico de Imágenes */}
      <GalleryGrid />

      {/* 3. Cierre sutil de la página */}
      <section className="w-full py-20 bg-neutral-950 flex flex-col items-center justify-center">
        <div className="w-px h-16 bg-gradient-to-b from-stone-800 to-transparent mb-8"></div>
        <p className="font-syne text-stone-500 text-xs tracking-[0.4em] uppercase">
          Domenico D'Orazio
        </p>
      </section>

    </main>
  );
}
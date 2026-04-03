import Navbar from "../../components/Navbar";

export default function Galeria() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <section className="pt-32 px-6 max-w-7xl mx-auto text-center">
        <h1 className="font-syne text-5xl text-neutral-900 mb-6">Galería</h1>
        <p className="font-outfit text-neutral-600">Mosaico de fotos de eventos.</p>
      </section>
    </main>
  );
}
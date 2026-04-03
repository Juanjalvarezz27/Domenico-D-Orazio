import ServicesHero from "../../components/Services/ServicesHero";
import ServicesList from "../../components/Services/ServicesList";
import Link from "next/link";

export default function ServiciosPage() {
  return (
    <main className="flex flex-col bg-stone-50 min-h-screen">
      <ServicesHero />
      <ServicesList />

      {/* CTA Final */}
      <section className="py-32 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne text-4xl md:text-6xl text-stone-100 mb-12 tracking-tight">
            Diseñemos algo <br />
            <span className="italic font-light text-stone-500">extraordinario.</span>
          </h2>
          
          <Link 
            href="/home/contacto"
            className="inline-block px-12 py-5 border border-stone-700 text-stone-200 font-outfit text-xs tracking-widest uppercase hover:bg-stone-100 hover:text-neutral-950 transition-all duration-500"
          >
            Reservar Consulta Inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
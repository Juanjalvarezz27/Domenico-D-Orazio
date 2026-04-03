import ContactHero from "../../components/Contacto/ContactHero";
import ContactInfo from "../../components/Contacto/ContactInfo";

export default function ContactoPage() {
  return (
    <main className="flex flex-col bg-stone-50 min-h-screen text-neutral-900 selection:bg-stone-200 selection:text-stone-900">
      
      {/* Encabezado Oscuro de Contacto */}
      <ContactHero />

      {/* Directorio de Información */}
      <ContactInfo />

    </main>
  );
}
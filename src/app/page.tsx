import Section1 from "../app/components/Inicio/Section1";
import Section2 from "../app/components/Inicio/Section2";
import Section3 from "../app/components/Inicio/Section3";

export default function Home() {
  return (
    <main className="flex flex-col bg-stone-50 overflow-hidden text-neutral-900">
      
      {/* Componente Hero (Portada) */}
      <Section1 />

      {/* Componente Metodología (Recorrido en S) */}
      <Section2 />

      {/* Componente Final (Llamado a la acción) */}
      <Section3 />

    </main>
  );
}
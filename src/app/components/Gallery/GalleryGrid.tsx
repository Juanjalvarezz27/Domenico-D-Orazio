"use client";

import { motion } from "framer-motion";

// Simulamos los proyectos con diferentes proporciones (aspect ratios)
const projects = [
  { id: 1, title: "Boda Costa Amalfi", category: "Weddings", aspect: "aspect-[3/4]", span: "md:col-span-4 md:row-span-2" },
  { id: 2, title: "Gala Corporativa Nexus", category: "Corporate", aspect: "aspect-square", span: "md:col-span-4 md:row-span-1" },
  { id: 3, title: "XV Años Siena", category: "Social", aspect: "aspect-[4/3]", span: "md:col-span-4 md:row-span-1" },
  { id: 4, title: "Lanzamiento Aura", category: "Corporate", aspect: "aspect-[4/3]", span: "md:col-span-8 md:row-span-2" },
  { id: 5, title: "Boda Villa Momboy", category: "Weddings", aspect: "aspect-[3/4]", span: "md:col-span-4 md:row-span-2" },
  { id: 6, title: "Bautizo Laurent", category: "Social", aspect: "aspect-square", span: "md:col-span-4 md:row-span-1" },
  // AÑADIDA: Imagen 7 para cerrar el hueco de la cuadrícula
  { id: 7, title: "Editorial Novias", category: "Weddings", aspect: "aspect-[4/3]", span: "md:col-span-4 md:row-span-1" },
];

export default function GalleryGrid() {
  return (
    <section className="w-full py-10 md:py-20 bg-neutral-950">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6">
        
        {/* Cuadrícula Asimétrica */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(0,_auto)]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group overflow-hidden bg-neutral-900 cursor-pointer ${project.span} ${project.aspect} w-full h-full`}
            >
              {/* Imagen Placeholder (Fondo) */}
              <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 group-hover:scale-105 transition-transform duration-[1.5s] ease-out flex items-center justify-center">
                {/* Textura de rayas para el placeholder */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')] opacity-[0.05]"></div>
                <span className="font-syne text-neutral-700 text-xs tracking-widest uppercase italic text-center px-4">
                  {project.category} Image
                </span>
              </div>

              {/* Overlay Oscuro en Hover */}
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/60 transition-colors duration-500 z-10" />

              {/* Textos Revelados en Hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <span className="font-outfit text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="font-syne text-xl md:text-3xl text-stone-100 tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
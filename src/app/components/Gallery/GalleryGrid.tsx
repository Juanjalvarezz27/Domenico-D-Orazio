"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, title: "Boda Costa Amalfi", category: "Weddings", aspect: "aspect-[3/4]", span: "md:col-span-4 md:row-span-2", imgSrc: "/gallery/1.jpg" },
  { id: 2, title: "Gala Corporativa Nexus", category: "Corporate", aspect: "aspect-square", span: "md:col-span-4 md:row-span-1", imgSrc: "/gallery/2.jpg" },
  { id: 3, title: "XV Años Siena", category: "Social", aspect: "aspect-[4/3]", span: "md:col-span-4 md:row-span-1", imgSrc: "/gallery/A3.jpg" },
  { id: 4, title: "Lanzamiento Aura", category: "Corporate", aspect: "aspect-[4/3]", span: "md:col-span-8 md:row-span-2", imgSrc: "/gallery/4.jpg" },
  { id: 5, title: "Boda Villa Momboy", category: "Weddings", aspect: "aspect-[3/4]", span: "md:col-span-4 md:row-span-2", imgSrc: "/gallery/5.jpg" },
  { id: 6, title: "Bautizo Laurent", category: "Social", aspect: "aspect-square", span: "md:col-span-4 md:row-span-1", imgSrc: "/gallery/6.jpg" },
  { id: 7, title: "Editorial Novias", category: "Weddings", aspect: "aspect-[4/3]", span: "md:col-span-4 md:row-span-1", imgSrc: "/gallery/7.jpg" },
];

export default function GalleryGrid() {
  return (
    // CORRECCIÓN 1: Agregado 'relative' al section para quitar el error de Framer Motion y mejorar el rendimiento
    <section className="relative w-full py-10 md:py-20 bg-neutral-950">
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
              className={`relative group overflow-hidden bg-neutral-900 cursor-pointer ${project.span} ${project.aspect} w-full h-full transform-gpu`}
            >
              
              {/* Contenedor de la Imagen con Efecto Hover */}
              <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                <Image 
                  src={project.imgSrc}
                  alt={`Proyecto: ${project.title}`}
                  fill
                  sizes={
                    project.span.includes('col-span-8') 
                      ? "(max-width: 768px) 100vw, 66vw" 
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* CORRECCIÓN 2: Capas de Overlay Mejoradas */}
              {/* Capa base muy sutil constante */}
              <div className="absolute inset-0 bg-neutral-950/10 z-10 pointer-events-none" />
              
              {/* Capa de Gradiente en Hover: Oscurece solo abajo para el texto, deja la foto brillante arriba */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              {/* Textos Revelados en Hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <span className="font-outfit text-stone-300 text-[10px] tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="font-syne text-xl md:text-3xl text-white tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
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
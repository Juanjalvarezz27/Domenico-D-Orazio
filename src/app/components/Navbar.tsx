"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "SOBRE MÍ", href: "/home/sobremi" },
    { name: "SERVICIOS", href: "/home/servicios" },
    { name: "GALERÍA", href: "/home/galeria" },
    { name: "CONTACTO", href: "/home/contacto" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white z-[100] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          <div className="flex-shrink-0 z-[110]">
            <Link href="/" className="flex flex-col" onClick={closeMenu}>
              <span className={`font-syne font-bold text-xl md:text-2xl tracking-[0.1em] transition-colors duration-500 ${isOpen ? 'text-white md:text-neutral-900' : 'text-neutral-900'}`}>
                D'ORAZIO
              </span>
              {/* Cambiado el ámbar por un stone-500 (taupe/gris cálido) */}
              <span className={`font-outfit text-[8px] md:text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${isOpen ? 'text-stone-400 md:text-stone-500' : 'text-stone-500'}`}>
                Wedding & Event Planner
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative font-outfit text-xs font-bold tracking-[0.2em] text-neutral-900 hover:text-stone-500 transition-colors py-2"
              >
                {link.name}
                {/* Línea hover sutil en gris cálido */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stone-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {/* Botón ahora es Carbón/Negro (neutral-900) */}
            <Link 
              href="/home/contacto"
              className="font-outfit text-[10px] font-bold tracking-[0.2em] text-white bg-neutral-900 px-6 py-3 hover:bg-stone-600 transition-all duration-300"
            >
              CONTACTAR
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 z-[110] relative focus:outline-none"
          >
            <div className="w-7 h-5 flex flex-col justify-between items-end">
              <span className={`h-[1.5px] transition-all duration-300 ease-out ${isOpen ? 'bg-white w-7 rotate-45 translate-y-[9px]' : 'bg-neutral-900 w-7'}`}></span>
              <span className={`h-[1.5px] transition-all duration-300 ease-out ${isOpen ? 'bg-white opacity-0' : 'bg-neutral-900 w-5'}`}></span>
              <span className={`h-[1.5px] transition-all duration-300 ease-out ${isOpen ? 'bg-white w-7 -rotate-45 -translate-y-[9px]' : 'bg-neutral-900 w-6'}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-r border-b border-stone-100 shadow-[4px_4px_5px_rgba(0,0,0,0.01)]"></div>

      <div
        className={`fixed inset-0 bg-neutral-950 z-[105] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={`font-syne text-4xl font-bold tracking-wider text-white hover:text-stone-400 transition-all duration-500 delay-[${index * 100}ms] ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Botón móvil en blanco y negro */}
          <Link
            href="/home/contacto"
            onClick={closeMenu}
            className="mt-8 font-outfit text-sm font-bold tracking-[0.2em] text-neutral-900 bg-white px-12 py-4 rounded-none"
          >
            CONTACTAR
          </Link>
        </div>
      </div>
    </nav>
  );
}
import type { Metadata } from "next";
import { Syne, Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

// 1. Syne: Para titulares de alto impacto y ese toque "Editorial Moderno"
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

// 2. Outfit: Para subtítulos limpios, botones y el menú de navegación
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// 3. DM Sans: Para máxima legibilidad en los párrafos de su perfil y metodología
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Domenico D'Orazio | Wedding & Event Planner",
  description: "Diseñando experiencias inolvidables que trascienden. Event and Wedding planner certificado con más de 6 años de trayectoria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-stone-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
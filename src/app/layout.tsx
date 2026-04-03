import type { Metadata } from "next";
import { Syne, Outfit, DM_Sans } from "next/font/google";
import Navbar from "../../src/app/components/Navbar"; 
import Footer from "../../src/app/components/Footer"; // <-- Importamos el Footer
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

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
        
        {/* El Navbar vive aquí para todas las páginas de la app */}
        <Navbar />
        
        {/* Envolvemos children en main con flex-1 para empujar el footer al fondo */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* El Footer global */}
        <Footer />
        
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Syne, Outfit, DM_Sans, Syncopate } from "next/font/google";
import Navbar from "../../src/app/components/Navbar"; 
import Footer from "../../src/app/components/Footer"; 
import "./globals.css";

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans" 
});

const syncopate = Syncopate({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-syncopate" 
});

export const metadata: Metadata = {
  title: "Domenico D'Orazio | Wedding & Event Planner",
  description: "Diseñando experiencias inolvidables que trascienden. Event and Wedding planner certificado con más de 6 años de trayectoria.",
  openGraph: {
    title: "Domenico D'Orazio | Wedding & Event Planner",
    description: "Diseñando experiencias inolvidables que trascienden. Event and Wedding planner certificado con más de 6 años de trayectoria.",
    url: "https://domenico-dorazio.vercel.app/",
    siteName: "Domenico D'Orazio",
    locale: "es_ES",
    type: "website",
  },
  verification: {
    google: "-FI9xlSjbVOiRsTGy43fNK7Snw9I0d3oZgBmggCnzhw", 
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${outfit.variable} ${dmSans.variable} ${syncopate.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-stone-50 text-neutral-900">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Comienza invisible y ligeramente más abajo
      initial={{ opacity: 0, y: 20 }}
      // Se anima hacia su estado y posición original
      animate={{ opacity: 1, y: 0 }}
      // Curva de animación personalizada tipo "ease" (súper premium y cinematográfica)
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
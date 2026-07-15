import React from "react";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Authenticity() {
  const scrollToSpecs = () => {
    const element = document.getElementById("specs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={revealVariants}
      className="py-12 bg-secondary text-on-secondary-container"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo: Selo de Originalidade */}
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            workspace_premium
          </span>
          <div>
            <h3 className="font-bold text-xl uppercase tracking-tight">Originalidade Garantida</h3>
            <p className="text-sm opacity-80 font-body-md">
              Qualidade original de fábrica com garantia estendida.
            </p>
          </div>
        </div>

        {/* Botão de Ação */}
        <button 
          onClick={scrollToSpecs}
          className="bg-on-secondary-container text-secondary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Saber Mais
        </button>

      </div>
    </motion.section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSpecs = () => {
    const element = document.getElementById("specs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-stack-lg min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 lg:grid-cols-2 gap-stack-md items-center relative z-10">
        
        {/* Lado Esquerdo: Conteúdo de Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
            CHRONOS PREMIUM: <span className="text-secondary">Conexão Total</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            O assistente pessoal definitivo que une alta tecnologia, monitoramento de saúde em tempo real e estilo inigualável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="bg-surface-container-high p-4 rounded-xl border border-white/5">
              <span className="font-label-caps text-label-caps text-on-surface-variant line-through block">
                De R$ 289,00
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                R$ 187,00
              </span>
            </div>
            <button 
              onClick={scrollToSpecs}
              className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl font-label-caps text-label-caps font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(193,237,0,0.3)] transition-all duration-300"
            >
              APROVEITE A OFERTA
            </button>
          </div>
        </motion.div>

        {/* Lado Direito: Imagem do Produto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center w-full"
        >
          <div className="absolute -inset-4 bg-secondary/10 blur-[100px] rounded-full"></div>
          <img
            alt="Smartwatch Chronos Premium"
            className="relative z-10 w-full max-w-md drop-shadow-2xl object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo0w3LEcz0gUsm3705bskppZ75AyXa29LhVhZ-Ixxca_o-g-KcHbqSK9AIEJYWQq2MQPErJ9x9Y7YX5aUOp7Y4_wYkiDjhJKhWDt7skLea3MIigDXl7TYCSPAUWSNXYu6WH8yaYHsUoJVNtRdr2M7u_6X5KWIBXLU-6xky5mFnbZzLK6dHxCdrTD_2I3t3CDMf-554m5-sCiruFmh_foar-9nr4YemXV3dfBUBiSdzLXK1t03TCTbjYSVK0xzdwaAQJUyz3WQa83w"
          />
        </motion.div>
      </div>
    </section>
  );
}

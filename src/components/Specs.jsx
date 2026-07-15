import React from "react";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function Specs() {
  const specsList = [
    {
      icon: "water_drop",
      title: "Resistência",
      desc: "Classificação IP68 contra água e poeira."
    },
    {
      icon: "battery_charging_full",
      title: "Bateria",
      desc: "Até 7 dias de uso intenso por carga."
    },
    {
      icon: "language",
      title: "Idiomas",
      desc: "Total suporte para Português e Inglês."
    },
    {
      icon: "verified",
      title: "Qualidade",
      desc: "Originalidade Garantida de fábrica."
    }
  ];

  return (
    <section className="py-stack-lg" id="specs">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        
        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="text-center mb-stack-md"
        >
          <h2 className="font-headline-md text-headline-md mb-4 text-on-background">
            Especificações Técnicas
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de Especificações */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {specsList.map((spec, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="p-6 border border-white/5 rounded-2xl hover:border-secondary/50 transition-colors duration-300 group cursor-default"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </span>
              <h5 className="font-bold mb-2 text-on-background text-lg">
                {spec.title}
              </h5>
              <p className="text-sm text-on-surface-variant">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

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

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Sports() {
  return (
    <section className="py-stack-lg bg-surface-container-low overflow-hidden" id="esportes">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row items-center gap-stack-md relative z-10">
          
          {/* Lado Esquerdo: Textos e Métricas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="lg:w-1/2 w-full"
          >
            <h2 className="font-headline-md text-headline-md mb-4 text-on-background">
              Supere seus Limites.
            </h2>
            <p className="text-on-surface-variant text-body-lg mb-8 max-w-xl">
              Mais de 100 modos esportivos para acompanhar cada movimento seu, seja no asfalto, na água ou na academia.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
              {/* Card Metrica 1 */}
              <motion.div
                custom={0}
                variants={chipVariants}
                className="glass-card p-4 rounded-xl text-center hover:border-white/10 transition-all duration-300"
              >
                <div className="text-secondary font-bold text-2xl">100+</div>
                <div className="text-on-surface-variant text-xs font-label-caps mt-1">MODOS</div>
              </motion.div>

              {/* Card Metrica 2 */}
              <motion.div
                custom={1}
                variants={chipVariants}
                className="glass-card p-4 rounded-xl text-center hover:border-white/10 transition-all duration-300"
              >
                <div className="text-secondary font-bold text-2xl">23.5k</div>
                <div className="text-on-surface-variant text-xs font-label-caps mt-1">PASSOS/DIA</div>
              </motion.div>

              {/* Card Metrica 3 */}
              <motion.div
                custom={2}
                variants={chipVariants}
                className="glass-card p-4 rounded-xl text-center hover:border-white/10 transition-all duration-300"
              >
                <div className="text-secondary font-bold text-2xl">IP68</div>
                <div className="text-on-surface-variant text-xs font-label-caps mt-1">RESISTÊNCIA</div>
              </motion.div>

            </div>
          </motion.div>

          {/* Lado Direito: Imagem de Performance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <img
              alt="Esportes e performance"
              className="rounded-3xl shadow-2xl max-w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA1UJmT3mW6ShNgDalv24QUA4ZNu4p7GixQ6wUV4UTj1Owf-zarMMIe98F4Q63Jew_VqIYzSpo_Jtsrk0WXlxj0HoFD0nYVHSlqYygKIGoDu3sVy6SAgA74Prs6c9MX6mElkDUyXSeYPB02scxlxDwR_mxn5i7R8veDKOfvCBWu2PH58ZwfcNB95y0R09APMrmYDUu2jjOjS5OPv-9mNQJdgHSpbMa1AR3tcrBqIsWJ5-TX0Hth5nd8c2Tbj1DSvkhiXqCv8HVX_s"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

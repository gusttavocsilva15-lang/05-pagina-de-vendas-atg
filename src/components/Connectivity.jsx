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

export default function Connectivity() {
  return (
    <section className="py-stack-lg bg-surface-container-lowest" id="conectividade">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="text-center mb-stack-md"
        >
          <span className="font-label-caps text-label-caps text-tertiary mb-2 block uppercase tracking-widest">
            Conectividade
          </span>
          <h2 className="font-headline-md text-headline-md mb-4">
            Sua Vida em Tempo Real.
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Nunca perca o que importa. Receba notificações instantâneas e controle seu mundo direto do seu pulso.
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          
          {/* Card 1: Central de Notificações */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors duration-300"
          >
            <div>
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">share</span>
                </div>
              </div>
              <h3 className="font-headline-md text-2xl mb-4">Central de Notificações</h3>
              <p className="text-on-surface-variant mb-8 font-body-md">
                WhatsApp, Instagram, e-mails e chamadas. Controle sua vida social sem precisar tirar o telefone do bolso.
              </p>
            </div>
            <img
              alt="Interface de notificações do Chronos"
              className="rounded-xl object-cover h-64 w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCacq7Y8XcvmRkhFFY4rwNv9YdUQieKoqZO62Is-ZP26KgRUnqxXxrBw_eGwfwVFmCUKdS3k6E_NRZ51IIfFEoiw-IxL_mDXJybIHJFsKzW0dnH0BWWzHqR7_DjTSVHCpm84sd8y5BCpZU5O-qjzbWFyfWmJHmGoqnjnU6tYavxJ6SP_PdTsYAp9vfogtzw-ZO3VWqxV4WPBLG2fMz56FVVEZQv4Sr6BXPpOpr5VWeQG7FrTTK0LK559Agamlliy6HFLL4nuckKUQo"
            />
          </motion.div>

          {/* Card 2: Controle de Voz AI */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } 
              }
            }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors duration-300"
          >
            <div>
              <h3 className="font-headline-md text-2xl mb-4">Controle de Voz AI</h3>
              <p className="text-on-surface-variant mb-8 font-body-md">
                Integração completa com assistentes de voz para comandos rápidos e precisos durante seu dia a dia.
              </p>
            </div>
            <img
              alt="Chamada Bluetooth e voz AI"
              className="rounded-xl object-cover h-64 w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1bPe8ONMZs7w8wJodU7AlCIlb9Km7xL_SwRCP7IJGVrW0yrqrsGp3Ddj2mJaZfQmK8XpyE1vMBRO56QagnFWejfkS4CqKzd1CDdlkSNgNlqejnNz9afCDbxYrGniJ-Vb_R2PGkvzQU7Gsg9fREOVZLgkpCDO2UFOZbm6yHCEt56zWMG_wJWF_1M4D-tLNrwLJLDTtEbFyffb6iaU1wb8yDqSzwo2UA4k-jD42T_GA11XgB6X5qmc2C64LQeAW6eYczZyXNdUl_2c"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

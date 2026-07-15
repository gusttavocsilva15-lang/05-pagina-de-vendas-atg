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

export default function Health() {
  return (
    <section className="py-stack-lg" id="saude">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md items-center">
          
          {/* Lado Esquerdo: Imagem com Watchface Flutuante */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="order-2 lg:order-1 relative flex justify-center"
          >
            <div className="relative inline-block">
              <img
                alt="Monitoramento de saúde"
                className="rounded-2xl w-full max-w-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCOs2GqVRTGEqDq2UTzrWI-XhJTlkX8OUeQNoTFA56vP4KclrYDMf_W3sqG3tQdqAFdTzobYjjFXB59pH18cSvgbLduhRJpQCSJpX7WNrBv_Okl1GLJs4CGjZpgcHHB89A8snQ3XfyDisUmScEpyLD_ZwZ2Gp41NPf9oNmtjNjeHRsQU4xSEhX75JD5MoFv2tCsVwbWIoRJ5HHZBLWd0H5wmNCheRvtiLV7DWXtVPZt0tI5LSdxCXH2b6X-HvZcovfUr9Xjk2OTV4"
              />
              
              {/* Watchface Flutuante com Framer Motion (Animação de flutuação suave e realística) */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-6 -right-6 hidden md:block w-48 drop-shadow-2xl"
              >
                <img
                  alt="Watchface saúde"
                  className="rounded-full shadow-2xl border border-white/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHmRtYZ1X1ANEIe5XDRp981tcPy4usrUGYcvxAq8642FL0hPbgho4Cnw4F_ZPd3XJ-ZWxY4pEQg5MMeKH12JMPSs2nC1Ufd19DBOvHIBUyy6VGqCQNnI2ThFEA9yn7D19mrfsqy5U38ZV0DLGtlDb6DeLgHwOrsitpPiJ-PtPipiZ9j2ERsdkJYSgxdFbaaY0ZykpmLuj4nN3VXopW2BgK7s9wgB_Ld_uwc-N6lgV3LFUDmznGYtHjg4LqJNw-PvP4UchW1MoVl8c"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Lado Direito: Alertas e Estatísticas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="order-1 lg:order-2"
          >
            <span className="font-label-caps text-label-caps text-tertiary mb-2 block uppercase tracking-widest">
              Saúde e Bem-Estar
            </span>
            <h2 className="font-headline-md text-headline-md mb-6">
              Seu Assistente de Bem-Estar 24h.
            </h2>
            <div className="space-y-6">
              
              {/* Batimento Cardíaco */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-error-container/20 text-error rounded-xl animate-pulse-soft">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-on-background">Frequência Cardíaca</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Monitoramento contínuo com alertas de alta precisão para sua segurança.
                  </p>
                </div>
              </div>

              {/* Sono Profundo */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-tertiary-container/40 text-tertiary rounded-xl">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bedtime
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-on-background">Sono Profundo</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Análise detalhada dos seus ciclos de sono para noites mais restauradoras.
                  </p>
                </div>
              </div>

              {/* Lembretes de Hidratação */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-container/40 text-primary rounded-xl">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    water_drop
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-on-background">Lembretes Hidratação</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Nunca esqueça de beber água ou tomar seus remédios com alertas inteligentes.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

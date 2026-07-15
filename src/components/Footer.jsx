import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-gutter">
        
        {/* Marca Chronos */}
        <div className="flex flex-col items-center md:items-start">
          <div className="font-headline-md text-headline-md text-on-background mb-2">
            CHRONOS
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            Elevando sua performance e estilo todos os dias.
          </p>
        </div>

        {/* Links do Footer */}
        <div className="flex gap-8 flex-wrap justify-center">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#privacidade">
            Privacidade
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#termos">
            Termos
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#suporte">
            Suporte
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#contato">
            Contato
          </a>
        </div>

        {/* Copyright */}
        <div className="text-tertiary font-body-md text-center md:text-right text-sm">
          © 2024 Chronos Premium. Garantia de Autenticidade Original.
        </div>

      </div>
    </footer>
  );
}

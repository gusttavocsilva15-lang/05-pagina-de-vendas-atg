import React from "react";

export default function Header() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-sm">
      <nav className="flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto">
        <div className="font-display-lg text-body-lg font-extrabold tracking-tighter text-on-background">
          CHRONOS
        </div>
        <div className="hidden md:flex gap-8">
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="#conectividade"
            onClick={(e) => scrollToSection(e, "conectividade")}
          >
            Conectividade
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="#saude"
            onClick={(e) => scrollToSection(e, "saude")}
          >
            Saúde
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="#esportes"
            onClick={(e) => scrollToSection(e, "esportes")}
          >
            Esportes
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer"
            href="#specs"
            onClick={(e) => scrollToSection(e, "specs")}
          >
            Especificações
          </a>
        </div>
        <button 
          onClick={(e) => scrollToSection(e, "specs")}
          className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-label-caps text-label-caps font-bold hover:bg-secondary transition-all"
        >
          Comprar Agora
        </button>
      </nav>
    </header>
  );
}

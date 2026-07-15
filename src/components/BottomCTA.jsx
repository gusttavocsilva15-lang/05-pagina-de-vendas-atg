import React from "react";

export default function BottomCTA() {
  const scrollToSpecs = () => {
    const element = document.getElementById("specs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex justify-end p-4">
      <button 
        onClick={scrollToSpecs}
        className="bg-secondary-container text-on-secondary-container rounded-full px-8 py-4 flex items-center gap-2 animate-bounce shadow-[0_0_20px_rgba(193,237,0,0.4)] cursor-pointer hover:scale-105 hover:bg-secondary transition-all active:scale-90 border-none"
      >
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="font-label-caps text-label-caps font-bold">🛒 COMPRAR AGORA</span>
      </button>
    </div>
  );
}

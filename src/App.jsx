import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Connectivity from "./components/Connectivity";
import Health from "./components/Health";
import Sports from "./components/Sports";
import Specs from "./components/Specs";
import Authenticity from "./components/Authenticity";
import Footer from "./components/Footer";
import BottomCTA from "./components/BottomCTA";

function App() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen overflow-x-hidden">
      {/* Cabeçalho de Navegação */}
      <Header />

      {/* Conteúdo Principal Semântico */}
      <main>
        {/* Seção Hero */}
        <Hero />

        {/* Seção de Conectividade */}
        <Connectivity />

        {/* Seção de Saúde e Bem-Estar */}
        <Health />

        {/* Seção de Esportes e Métricas */}
        <Sports />

        {/* Seção de Especificações Técnicas e Compra */}
        <Specs />

        {/* Banner de Garantia de Originalidade */}
        <Authenticity />
      </main>

      {/* Rodapé Semântico */}
      <Footer />

      {/* Botão de Ação Flutuante */}
      <BottomCTA />
    </div>
  );
}

export default App;

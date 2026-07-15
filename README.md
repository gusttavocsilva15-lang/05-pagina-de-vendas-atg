# Chronos Premium — Página de Vendas

> Página de vendas de alta conversão para o smartwatch **Chronos Premium**, construída com React 19, Vite, Tailwind CSS 3 e Framer Motion.

---

## 🚀 Tecnologias

| Tecnologia | Versão |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 3 |
| Framer Motion | 12 |
| PostCSS / Autoprefixer | latest |

---

## 📂 Estrutura

```
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes React (Hero, Header, Specs…)
│   ├── assets/          # Imagens e ícones processados pelo Vite
│   ├── App.jsx          # Composição principal da página
│   ├── main.jsx         # Entry point
│   └── index.css        # Design system + Tailwind directives
├── old/                 # Arquivo HTML original (Google Stitch)
├── index.html           # Template HTML do Vite
├── tailwind.config.js   # Design tokens (cores, tipografia, animações)
├── vite.config.js       # Configuração do Vite
└── .gitignore
```

---

## ⚙️ Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/gusttavocsilva15-lang/05-pagina-de-vendas-atg.git
cd 05-pagina-de-vendas-atg

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em **http://localhost:5173**

---

## 📦 Comandos

```bash
npm run dev       # Servidor de desenvolvimento (HMR)
npm run build     # Build de produção → /dist
npm run preview   # Pré-visualização do build
npm run lint      # Linting com Oxlint
```

---

## 🔐 Variáveis de Ambiente

Renomeie `.env.example` para `.env.local` e preencha as variáveis necessárias.

> ⚠️ Nunca commite arquivos `.env` com valores reais.

---

## 📄 Licença

Este projeto é de uso privado e proprietário — todos os direitos reservados.

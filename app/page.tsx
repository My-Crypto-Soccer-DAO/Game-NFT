// app/page.tsx
import React from "react";
import LoginPage from "./login"; // Importando a página de login
import SignUpButton from "@/components/SignUpButton/page";
const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Jogo</h1>
      <LoginPage /> 
      

    </div>
  );
};

export default HomePage;

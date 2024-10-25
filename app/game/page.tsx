// app/game/page.tsx
"use client";
import React, { useState } from "react"; // Importa useState
import Login from "../login"; // Importando a página de login
import NavigationPage from "@/components/Navigation/page"; // Importando a página de navegação

const GamePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<"login" | "navigation">("login"); // Estado para controlar a página atual

  const handleSignUpClick = () => {
    setCurrentPage("navigation"); // Muda a página atual para Navigation
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Jogo</h1>

      {/* Renderiza o Login se a página atual for login */}
      {currentPage === "login" && <Login onSignUpClick={handleSignUpClick} />}
      
      {/* Renderiza a NavigationPage se a página atual for navigation */}
      {currentPage === "navigation" && <NavigationPage />}
    </div>
  );
};

export default GamePage;

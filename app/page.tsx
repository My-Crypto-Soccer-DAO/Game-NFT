"use client";
import React, { useState } from "react"; // Importa useState
import Login from "./login"; // Importando a página de login
import NavigationPage from "@/components/Navigation/page";

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("login"); // Estado para controlar a página atual

  const handleSignUpClick = () => {
    setCurrentPage("navigation"); // Muda a página atual para Navigation
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Jogo</h1>

      {currentPage === "login" && <Login onSignUpClick={handleSignUpClick} />} {/* Renderiza o Login se a página atual for login */}
      {currentPage === "navigation" && <NavigationPage />} {/* Renderiza a NavigationPage se a página atual for navigation */}
    </div>
  );
};

export default HomePage;

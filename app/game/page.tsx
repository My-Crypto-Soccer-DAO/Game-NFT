"use client";
import React, { useState } from "react"; // Importa useState
import Login from "../login"; // Importando a página de login
import NavigationPage from "@/components/Navigation/page"; // Importando a página de navegação
import { useRouter } from "next/navigation"; // Importa o useRouter

const GamePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar o login
  const router = useRouter(); // Hook de navegação

  const handleSignUpClick = () => {
    setIsLoggedIn(true); // Atualiza o estado para indicar que o usuário está logado
    router.push('/game/navigation'); // Navega para a página de navegação
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Jogo</h1>

      {/* Renderiza o Login se o usuário não estiver logado */}
      {!isLoggedIn && <Login onSignUpClick={handleSignUpClick} />}
      
      {/* Renderiza a NavigationPage se o usuário estiver logado */}
      {isLoggedIn && <NavigationPage />}
    </div>
  );
};

export default GamePage;

"use client"; // Para garantir que o componente funcione no lado do cliente

import React from "react";
import { useRouter } from "next/navigation"; // Use o hook correto para redirecionamento no Next.js
import '../../styles/globals.css';

interface SignUpButtonProps {
  text: string;
  redirectTo: string;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ text, redirectTo }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(redirectTo); // Redireciona o usuário
  };

  return (
    <button
      onClick={handleClick}
        className="relative inline-flex items-center justify-center h-15 p-2 text-white transition-colors duration-300 border border-white rounded-lg 
                 bg-transparent hover:outline hover:outline-2 hover:outline-light-blue hover:outline-offset-2 
                 hover:bg-light-blue hover:text-dark-blue focus:outline-none 
                 focus:ring focus:ring-blue-300 shadow-lg hover:shadow-[0px_0px_40px_20px_rgba(0,255,255,0.5)]"
    >
      {text}
    </button>
  );
};

export default SignUpButton;

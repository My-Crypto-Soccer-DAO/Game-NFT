"use client";
import React from "react"; 
import LoginPage from "@/components/LoginPage/page"; // Importando LoginPage


const Login: React.FC<{ onSignUpClick: () => void }> = ({ onSignUpClick }) => {
  return (
    <div>
      <LoginPage onSignUpClick={onSignUpClick} /> {/* Passa a função para o LoginPage */}
    </div>
  );
};

export default Login;
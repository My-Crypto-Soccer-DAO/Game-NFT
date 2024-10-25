// app/login.tsx
import React from "react";
import SignUpButton from "@/components/SignUpButton/page";
import LoginPage from "@/components/LoginPage/page";
import '../styles/globals.css';

const Login: React.FC = () => {
  return (
    <div>
      <LoginPage /> 
      <SignUpButton text="Cadastrar" redirectTo="/signup" /> 
    </div>
  );
};

export default Login;

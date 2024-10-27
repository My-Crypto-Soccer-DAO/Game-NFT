"use client";
import React, { useState } from "react";
import Image from "next/image";
import { registerUser } from "@/lib/services/authService"; // Certifique-se de que o caminho está correto

interface InputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, value, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col grow">
      <label htmlFor={id} className="self-start text-2xl font-bold text-white">
        {label}
      </label>
      <div className="flex flex-col justify-center py-0.5 mt-2.5 rounded-lg bg-slate-600">
        <input
          id={id}
          type={id.toLowerCase().includes("password") ? "password" : "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`flex z-10 h-12 rounded-lg bg-slate-900 px-4 transition-all duration-300 ${
            isHovered ? 'text-sky-400 neon-text' : 'text-white'
          }`}
          aria-label={label}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
};

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  }>({
    name: "",
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const handleInputChange = (id: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, username, confirmPassword } = formData;

    // Validação básica de senhas
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    // Adicione uma verificação para garantir que todos os campos estão preenchidos
    if (!name || !email || !password || !username || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Chame a função de registro com os dados do usuário, passando os argumentos individualmente
      await registerUser(name, email, password, username);
      alert("Usuário registrado com sucesso!");
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao registrar usuário.");
    }
  };

  const formFields = [
    { label: "Nome", id: "name" },
    { label: "Email", id: "email" },
    { label: "Senha", id: "password" },
    { label: "Nome de usuário", id: "username" },
    { label: "Confirmar senha", id: "confirmPassword" },
  ];

  const logoSrc = "/Logo.png"; 

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      {/* Vídeo de Fundo */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src="/estadionoite.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <section className="flex flex-col items-center px-10 py-12 bg-slate-900 bg-opacity-80 rounded-lg w-[90%] max-w-5xl mt-10 shadow-lg z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src={logoSrc}
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold mb-10">Registro</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-8 w-full">
          <div className="flex gap-8 max-md:flex-col">
            <div className="flex flex-col w-1/2 max-md:w-full">
              {formFields.slice(0, 3).map((field) => (
                <div key={field.id} className="mb-8">
                  <InputField
                    {...field}
                    value={formData[field.id as keyof typeof formData]} // Assertiva de tipo
                    onChange={(value) => handleInputChange(field.id as keyof typeof formData, value)} // Assertiva de tipo
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col w-1/2 max-md:w-full">
              {formFields.slice(3).map((field) => (
                <div key={field.id} className="mb-8">
                  <InputField
                    {...field}
                    value={formData[field.id as keyof typeof formData]} // Assertiva de tipo
                    onChange={(value) => handleInputChange(field.id as keyof typeof formData, value)} // Assertiva de tipo
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Registro */}
          <button
            type="submit"
            className="relative inline-flex items-center justify-center h-15 p-2 text-white transition-colors duration-300 border border-white rounded-lg 
                     bg-transparent hover:outline hover:outline-2 hover:outline-light-blue hover:outline-offset-2 
                     hover:bg-light-blue hover:text-dark-blue focus:outline-none 
                     focus:ring focus:ring-blue-300 shadow-lg hover:shadow-[0px_0px_40px_20px_rgba(0,255,255,0.5)]">
            Registrar
          </button>
        </form>
      </section>
    </main>
  );
};

export default RegistrationPage;

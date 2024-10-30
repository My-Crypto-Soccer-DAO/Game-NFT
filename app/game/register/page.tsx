"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { auth, db } from '../../../services/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { registerUser } from "../../../lib/authService";
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    country: "",
  });

  const [isFirebaseReady, setIsFirebaseReady] = useState(true);

  useEffect(() => {
    if (!auth) {
      console.error("Firebase Auth não está configurado corretamente.");
      alert("Erro de configuração no Firebase Auth.");
      setIsFirebaseReady(false);
    }
  }, []);

  const handleInputChange = (id: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const registerUser = async (name: string, email: string, password: string, username: string, country: string) => {
    if (!auth) {
      console.error("Firebase Auth não está configurado corretamente.");
      alert("Erro de configuração no Firebase Auth.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        username,
        country,
        createdAt: new Date(),
      });

      console.log("Usuário registrado com sucesso:", user);
      alert("Usuário registrado com sucesso!");
      router.push('/game/dashboard');
    } catch (error) {
      console.error("Erro ao registrar:", (error as Error).message);
      alert("Erro ao registrar usuário.");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFirebaseReady) {
      alert("O sistema não está pronto para realizar o registro. Verifique as configurações.");
      return;
    }

    const { name, email, password, username, confirmPassword, country } = formData;

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!name || !email || !password || !username || !confirmPassword || !country) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    await registerUser(name, email, password, username, country);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado com sucesso:", user);
      alert("Usuário logado com sucesso!");
      router.push('/game/dashboard');
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", (error as Error).message);
      alert("Erro ao fazer login com o Google.");
    }
  };

  const formFields = [
    { label: "Nome", id: "name" },
    { label: "Email", id: "email" },
    { label: "Nome de usuário", id: "username" },
    { label: "Senha", id: "password" },
    { label: "Confirmar senha", id: "confirmPassword" },
    { label: "País", id: "country" },
  ];

  
  const countries = [
    "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola", "Antígua e Barbuda",
    "Argélia", "Argentina", "Armenia", "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bahrein",
    "Bangladesh", "Barbados", "Bielorrússia", "Bélgica", "Belize", "Benin", "Bermudas", "Bolívia",
    "Bósnia e Herzegovina", "Botsuana", "Brunei", "Brazil","Bulgária", "Burkina Faso", "Burundi", "Butão",
    "Cabo Verde", "Camarões", "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre",
    "Cidade do Vaticano", "Colômbia", "Comores", "Congo", "Congo, República Democrática do",
    "Coreia do Norte", "Coreia do Sul", "Costa do Marfim", "Costa Rica", "Croácia", "Cuba", "Dinamarca",
    "Dominica", "Egito", "El Salvador", "Emirados Árabes Unidos", "Equador", "Eslováquia", "Eslovênia",
    "Espanha", "Estados Unidos", "Estônia", "Eswatini", "Etiópia", "Fiji", "Filipinas", "Finlândia",
    "França", "Gabão", "Gâmbia", "Gana", "Grécia", "Grenada", "Guatemala", "Guiné", "Guiné Equatorial",
    "Guiné-Bissau", "Haiti", "Holanda", "Honduras", "Hong Kong", "Hungria", "Iémen", "Ilhas Cayman",
    "Ilhas Cook", "Ilhas Marshall", "Ilhas Salomão", "Índia", "Indonésia", "Irã", "Iraque", "Irlanda",
    "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", "Kiribati", "Kuwait", "Laos",
    "Lesoto", "Letônia", "Líbano", "Libéria", "Líbia", "Liechtenstein", "Lithuania", "Luxemburgo",
    "Malásia", "Malaui", "Maldivas", "Mali", "Malta", "Marrocos", "Maurício", "Mauritânia", "México",
    "Mianmar", "Micronésia", "Moçambique", "Namíbia", "Nauru", "Nepal", "Nicarágua", "Nigéria",
    "Noruega", "Nova Zelândia", "Omã", "Países Baixos", "Paquistão", "Panamá", "Papua Nova Guiné",
    "Paraguai", "Peru", "Polônia", "Porto Rico", "Portugal", "Qatar", "República Centro-Africana",
    "República Checa", "República Dominicana", "Romênia", "Ruanda", "Rússia", "Samoa", "San Marino",
    "Santa Lúcia", "São Cristóvão e Nevis", "São Tomé e Príncipe", "São Vicente e Granadinas",
    "Senegal", "Serra Leoa", "Sérvia", "Singapura", "Eslovênia", "Síria", "Somália", "Sri Lanka",
    "Suécia", "Suíça", "Suriname", "Tailândia", "Taiwan", "Tajiquistão", "Tanzânia", "Timor-Leste",
    "Togo", "Tonga", "Trinidad e Tobago", "Tunísia", "Turcomenistão", "Turquia", "Ucrânia", "Uganda",
    "Uruguai", "Uzbequistão", "Vanuatu", "Venezuela", "Vietnã", "Zâmbia", "Zimbábue"
  ];

  
  const logoSrc = "/Logo.png"; 

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      {/* Vídeo de Fundo */}
      <video className="absolute w-full h-full object-cover -z-10" autoPlay muted loop>
        <source src="/estadionoite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Logo */}
      <div className="flex justify-center mt-10">
        <Image src={logoSrc} alt="Logo" width={200} height={100} className="object-cover" />
      </div>

   {/* Formulário de Registro */}
<form onSubmit={handleRegister} className="flex flex-col gap-6 w-full max-w-2xl p-8 bg-slate-800 bg-opacity-90 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold mb-10 flex justify-center mb-10">Registro</h1>

  <div className="flex gap-8 max-md:flex-col">
    <div className="flex flex-col w-1/2 max-md:w-full">
      {formFields.slice(0, 3).map((field) => (
        <div key={field.id}>
          <InputField
            label={field.label}
            id={field.id}
            value={formData[field.id as keyof typeof formData]}
            onChange={(value) => handleInputChange(field.id as keyof typeof formData, value)}
          />
        </div>
      ))}
    </div>
    <div className="flex flex-col w-1/2 max-md:w-full">
      <div>
        <label htmlFor="country" className="self-start text-2xl font-bold text-white">
          País
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={(e) => handleInputChange("country" as keyof typeof formData, e.target.value)}
          className="flex z-10 h-12 rounded-lg bg-slate-900 px-4 text-white mt-2"
        >
          <option value="">Selecione seu país</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {formFields.slice(3).map((field) => (
        <div key={field.id}>
          <InputField
            label={field.label}
            id={field.id}
            value={formData[field.id as keyof typeof formData]}
            onChange={(value) => handleInputChange(field.id as keyof typeof formData, value)}
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
             focus:ring focus:ring-blue-300 shadow-lg hover:shadow-[0px_0px_40px_20px_rgba(0,255,255,0.5)]"
>
  Registrar
</button>

        {/* Botão de Login com Google */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="relative inline-flex items-center justify-center h-15 p-2 text-white transition-colors duration-300 border border-white rounded-lg 
             bg-transparent hover:outline hover:outline-2 hover:outline-light-blue hover:outline-offset-2 
             hover:bg-light-blue hover:text-dark-blue focus:outline-none 
             focus:ring focus:ring-blue-300 shadow-lg hover:shadow-[0px_0px_40px_20px_rgba(0,255,255,0.5)]"
        >
          Login com Google
        </button>
      </form>
    </main>
  );
};

export default RegistrationPage;

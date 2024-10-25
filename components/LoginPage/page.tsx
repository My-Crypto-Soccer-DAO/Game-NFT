// app/components/LoginPage/page.tsx
"use client"; 

import React from "react";
import Image from "next/image"; 
import SignUpButton from "@/components/SignUpButton/page";

interface LoginPageProps {
  onSignUpClick: () => void; // Define a prop para receber a função
}

const LoginPage: React.FC<LoginPageProps> = ({ onSignUpClick }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen">
      {/* Video de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videoinicio.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>

      {/* Camada de sobreposição escura para escurecer todo o vídeo */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <div className="absolute left-5 top-20 z-20 w-1/2 md:w-1/3 lg:w-1/4">
        <Image src="/kicking2.svg" alt="Kicking" layout="responsive" width={350} height={350} />
      </div>

      {/* Conteúdo de login */}
      <div className="relative z-20 bg-opacity-90 bg-gray-900 p-8 rounded-lg w-full max-w-lg mx-4 md:max-w-2xl lg:max-w-3xl">
        <h1 className="text-2xl font-bold text-white mb-5 text-center">
          Join our mailing list to receive the latest news and promo from my crypto soccer DAO
        </h1>
        {/* Passa a função onSignUpClick para o botão de inscrição */}
        <SignUpButton text="SIGN UP NOW" redirectTo="/game" onSignUpClick={onSignUpClick} />
      </div>

      {/* Imagens na parte inferior */}
      <div className="absolute bottom-10 flex justify-center items-center space-x-4 z-20 w-full px-4">
        <div className="flex-shrink-0 w-12 sm:w-16 md:w-24 lg:w-32">
          <Image src="/abalonga.png" alt="Abalonga" layout="responsive" width={80} height={80} />
        </div>
        <div className="flex-shrink-0 w-12 sm:w-16 md:w-24 lg:w-32">
          <Image src="/jiparana.png" alt="Jiparana" layout="responsive" width={80} height={80} />
        </div>
        <div className="flex-shrink-0 w-12 sm:w-16 md:w-24 lg:w-32">
          <Image src="/Logo_Vidal.png" alt="Logo Vidal" layout="responsive" width={80} height={80} />
        </div>
        <div className="flex-shrink-0 w-12 sm:w-16 md:w-24 lg:w-32">
          <Image src="/Logo_ELITE.png" alt="Logo Elite" layout="responsive" width={80} height={80} />
        </div>
        <div className="flex-shrink-0 w-12 sm:w-16 md:w-24 lg:w-32">
          <Image src="/rondoniense.png" alt="Rondoniense" layout="responsive" width={80} height={80} />
        </div>
        <div className="flex-shrink-0 w-12 sm:w-16 md:w-24 lg:w-32">
          <Image src="/uniao.png" alt="Uniao" layout="responsive" width={80} height={80} />
        </div>
        <div className="flex-shrink-0 w-12 sm:w-16 md:w-24 lg:w-32">
          <Image src="/genus.png" alt="Genus" layout="responsive" width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

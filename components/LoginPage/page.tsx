"use client"; // Necessário para usar hooks no Next.js App Router

import React from "react";
import Image from "next/image"; // Importando a tag Image do Next.js
import SignUpButton from "@/components/SignUpButton/page";

const LoginPage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Video de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/videoinicio.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>

      {/* Conteúdo de login */}
      <div className="relative z-10 bg-blue-600 bg-opacity-60 px-16 py-6 rounded-lg w-96">
        <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
        <SignUpButton text="SIGN UP NOW" redirectTo="/game" /> {/* Botão de entrar */}
      </div>

      {/* Imagens na parte inferior */}
      <div className="absolute bottom-10 flex justify-center space-x-4 z-10 w-full">
        <Image src="/abalonga.png" alt="Abalonga" width={80} height={80} />
        <Image src="/jiparana.png" alt="Jiparana" width={80} height={80} />
        <Image src="/Logo_Vidal.png" alt="Logo Vidal" width={80} height={80} />
        <Image src="/Logo_ELITE.png" alt="Logo Elite" width={80} height={80} />
        <Image src="/rondoniense.png" alt="Rondoniense" width={80} height={80} />
        <Image src="/uniao.png" alt="Uniao" width={80} height={80} />
        <Image src="/genus.png" alt="Genus" width={80} height={80} />
      </div>
    </div>
  );
};

export default LoginPage;

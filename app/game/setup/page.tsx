"use client";
import React from 'react';
import Image from 'next/image';
import Dashboard from '../../../components/Dashboard/page'; 

const OnCardPage: React.FC = () => {
  
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      {/* Adicionando a imagem no topo da página */}
      <div className="flex justify-center w-full mt-10">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={168}
          height={168}
          className="object-contain"
        />
      </div>

      {/* Vídeo de fundo que cobre toda a tela */}
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay muted loop>
        <source src="/estadionoite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="flex relative justify-center items-center w-full max-md:px-5 max-md:py-24">
        <nav className="flex flex-col md:flex-row items-start justify-between px-5 md:px-20 py-10 bg-slate-900 bg-opacity-60 w-full max-w-[1200px] rounded-lg shadow-lg">
          
          <Dashboard />
        </nav>
      </section>
    </main>
  );
};

export default OnCardPage;

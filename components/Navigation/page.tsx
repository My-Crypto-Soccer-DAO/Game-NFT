"use client";
import React from 'react';
import Image from 'next/image';

// Definição do tipo para os botões de autenticação
interface AuthButtonData {
  title: string;
  subtitle?: string;
  iconSrc: string;
}

// Array de dados dos botões
const authButtons: AuthButtonData[] = [
  {
    title: 'CONNECT YOUR',
    subtitle: 'WALLET',
    iconSrc: '/icon1p2.png',
  },
  {
    title: 'LOGIN TO YOUR',
    subtitle: 'ACCOUNT',
    iconSrc: '/icon2p2.png',
  },
  {
    title: 'REGISTER NOW',
    iconSrc: '/icon3p2.png',
  },
];

// Componente principal
const NavigationPage: React.FC = () => {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0" // Ajuste de z-index
      >
        <source src="/estadiodia.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Seção de botões de autenticação */}
      <section className="flex relative flex-col self-center mt-8 mb-0 ml-8 max-w-full w-[325px] max-md:mb-2.5">
        {authButtons.map((button, index) => (
          <div key={index} className={index > 0 ? 'mt-6' : ''}>
            <AuthButton {...button} />
          </div>
        ))}
      </section>
    </main>
  );
};

// Componente do botão de autenticação
interface AuthButtonProps {
  title: string;
  subtitle?: string;
  iconSrc: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ title, subtitle, iconSrc }) => {
  return (
    <div className="flex flex-col justify-center py-0.5 w-full bg-cyan-900 rounded-[43px]">
      <button className="flex z-10 gap-5 justify-between py-3.5 pr-4 pl-14 -mt-1 border-white border-solid bg-slate-900 border-[3px] rounded-[43px] max-md:pl-5">
        <div className="flex flex-col my-auto text-xl font-bold text-white">
          <span>{title}</span>
          {subtitle && <span className="self-center">{subtitle}</span>}
        </div>
        <div className="flex flex-col justify-center items-center px-1.5 w-16 h-16 bg-white rounded-full">
          <Image
            loading="lazy"
            src={iconSrc}
            alt=""
            width={52}
            height={52}
            className="object-contain aspect-square"
          />
        </div>
      </button>
    </div>
  );
};

export default NavigationPage;

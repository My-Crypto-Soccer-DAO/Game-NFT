"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import brasaoAnimation from '@/public/brasao.json';
import Lottie from "lottie-react";

interface AuthButtonData {
  title: string;
  iconSrc: string;
  onClick: () => void;
}

const authButtons: AuthButtonData[] = [
  {
    title: 'CONNECT YOUR WALLET',
    iconSrc: '/icon1p2.png',
    onClick: () => {},
  },
  {
    title: 'LOGIN YOUR ACCOUNT',
    iconSrc: '/icon2p2.png',
    onClick: () => {},
  },
  {
    title: 'REGISTER NOW',
    iconSrc: '/icon3p2.png',
    onClick: () => {},
  },
];

const NavigationPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set to true once mounted on the client
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  const handleConnectWallet = () => {
    router.push('/game/metamask');
  };

  const handleRegister = () => {
    router.push('/game/register');
  };

  const updatedAuthButtons = authButtons.map(button => {
    switch (button.title) {
      case 'CONNECT YOUR WALLET':
        return { ...button, onClick: handleConnectWallet };
      case 'REGISTER NOW':
        return { ...button, onClick: handleRegister };
      default:
        return button;
    }
  });

  return (
    <main className="relative flex flex-col items-center justify-center w-full min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src="/estadionoite.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20 w-1/4 md:w-1/6">
        <Lottie animationData={brasaoAnimation} loop={true} autoplay={true} style={{ width: '100%', height: 'auto' }} />
      </div>

      <section className="relative z-10 flex flex-col items-center gap-4 p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-20">
        <div className="absolute inset-0 bg-[#001f3f] opacity-60 rounded-[25px] z-[-1]" />
        {updatedAuthButtons.map((button, index) => (
          <AuthButton key={index} {...button} />
        ))}
      </section>
    </main>
  );
};

interface AuthButtonProps {
  title: string;
  iconSrc: string;
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ title, iconSrc, onClick }) => {
  return (
    <div className="flex flex-col justify-center w-full bg-cyan-900 rounded-[25px]">
      <button
        onClick={onClick}
        className="flex z-10 gap-2 items-center justify-between py-2 pr-2 pl-4 border-white border-solid bg-slate-900 border-[2px] rounded-3xl max-md:pl-2 w-full hover:shadow-[0px_0px_20px_10px_rgba(0,255,255,0.5)] "
      >
        <div className="flex flex-grow my-auto text-lg sm:text-base md:text-lg font-bold text-white text-left">
          <span>{title}</span>
        </div>
        <div className="flex flex-col justify-center items-center px-1 w-10 h-10 bg-white rounded-full">
          <Image
            loading="lazy"
            src={iconSrc}
            alt=""
            width={48}
            height={48}
            className="object-contain aspect-square"
          />
        </div>
      </button>
    </div>
  );
};

export default NavigationPage;

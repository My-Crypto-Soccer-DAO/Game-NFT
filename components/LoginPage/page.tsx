// app/components/LoginPage/page.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SignUpButton from "@/components/SignUpButton/page";
import Lottie from "lottie-react";
import Slider from "react-slick"; // Importando o Slider
import brasaoAnimation from '@/public/brasao.json'; // Importando o JSON da animação

interface LoginPageProps {
  onSignUpClick: () => void; // Define a prop para receber a função
}

const LoginPage: React.FC<LoginPageProps> = ({ onSignUpClick }) => {
  // Referência para o áudio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Configurações do carrossel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Mostra 5 imagens ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Adiciona o modo central
    centerPadding: '0px', // Remove o preenchimento nas bordas
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Para telas grandes, mostra 4 imagens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Para telas médias, mostra 3 imagens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Para telas pequenas, mostra 2 imagens
        },
      },
    ],
  };

  useEffect(() => {
    // Tocar o áudio ao carregar a página
    audioRef.current = new Audio("/som-de-torcida-de-futebol.mp3");
    audioRef.current.loop = true; // Loop contínuo
    audioRef.current.play().catch((error) => {
      console.log("Erro ao reproduzir áudio:", error);
    });

    // Parar o áudio ao sair da página
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Função para parar o áudio ao clicar no botão
  const handleSignUpClick = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Para a reprodução do áudio
      audioRef.current.currentTime = 0; // Reseta o tempo para o início
    }
    onSignUpClick(); // Chama a função recebida por props
  };

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

      {/* Animação do brasão centralizada na parte superior */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20 w-1/4 md:w-1/6">
        <Lottie animationData={brasaoAnimation} loop={true} autoplay={true} style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Caixa de texto agora atrás da animação */}
      <div className="relative z-10 bg-opacity-90 bg-gray-900 p-6 rounded-lg w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-4">
        <h1 className="text-lg md:text-xl font-bold text-white mb-4 text-center">
          Step into the exciting world of NFT card battles! Join us for a chance to earn tokens while challenging your friends. Come have fun and earn rewards!
        </h1>
        {/* Passa a função handleSignUpClick para o botão de inscrição */}
        <SignUpButton text="PLAY NOW" redirectTo="/game" onSignUpClick={handleSignUpClick} />
      </div>

      {/* Imagem na parte inferior */}
      <div className="absolute left-5 top-20 z-20 w-1/2 md:w-1/3 lg:w-1/4">
        <Image src="/kicking2.svg" alt="Kicking" layout="responsive" width={350} height={350} />
      </div>

      {/* Carrossel de imagens na parte inferior */}
      <div className="absolute bottom-10 z-20 w-full px-4">
        <Slider {...settings} className="flex justify-center">
          <div className="flex justify-center mx-1">
            <Image src="/abalonga.png" alt="Abalonga" layout="intrinsic" width={80} height={80} className="h-auto" />
          </div>
          <div className="flex justify-center mx-1">
            <Image src="/jiparana.png" alt="Jiparana" layout="intrinsic" width={80} height={80} className="h-auto" />
          </div>
          <div className="flex justify-center mx-1">
            <Image src="/Logo_Vidal.png" alt="Logo Vidal" layout="intrinsic" width={80} height={80} className="h-auto" />
          </div>
          <div className="flex justify-center mx-1">
            <Image src="/Logo_ELITE.png" alt="Logo Elite" layout="intrinsic" width={80} height={80} className="h-auto" />
          </div>
          <div className="flex justify-center mx-1">
            <Image src="/rondoniense.png" alt="Rondoniense" layout="intrinsic" width={80} height={80} className="h-auto" />
          </div>
          <div className="flex justify-center mx-1">
            <Image src="/uniao.png" alt="Uniao" layout="intrinsic" width={80} height={80} className="h-auto" />
          </div>
          <div className="flex justify-center mx-1">
            <Image src="/genus.png" alt="Genus" layout="intrinsic" width={80} height={80} className="h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LoginPage;

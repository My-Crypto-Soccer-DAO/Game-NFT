"use client";
import React, { FC } from "react";
import Image from "next/image";

interface MetamaskPageProps {}

const MetamaskPage: FC<MetamaskPageProps> = () => {
  const logoSrc =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ea4b413699983253e61f8782be7c6289dc170061e0cff7a487d2404132a64320?placeholderIfAbsent=true&apiKey=b3e1fdd27ead45e2804123d8b6a41a00";
  const backgroundSrc =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3d0763add64e1003b0d3cf39baba5b593a3959faaa366fb92c1993cd183b6954?placeholderIfAbsent=true&apiKey=b3e1fdd27ead45e2804123d8b6a41a00";

  return (
    <main
      data-layername="3Screen"
      className="flex overflow-hidden flex-col text-xl font-bold text-white bg-white min-h-screen"
    >
      <section
        className="flex relative flex-col justify-center items-center px-16 py-96 w-full min-h-screen max-md:px-5 max-md:py-24"
      >
        {/* Imagem de fundo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundSrc}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={backgroundSrc}
            priority // Para carregamento prioritário
          />
        </div>

        {/* Conteúdo principal */}
        <div className="flex relative gap-10 mb-0 max-w-full w-[430px] max-md:mb-2.5 z-10">
          <Image
            src={logoSrc}
            alt="Metamask logo"
            width={69}
            height={69}
            className="object-contain aspect-square"
            priority
          />
          <h1
            data-layername="pleaseConfirmInMetamask"
            className="flex-auto my-auto w-[292px]"
          >
            PLEASE CONFIRM IN METAMASK
          </h1>
        </div>
      </section>
    </main>
  );
};

export default MetamaskPage;

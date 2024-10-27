// app/setup/page.tsx

import React from 'react';
import Image from 'next/image';

const menuItems = [
  {
    icon: '/lock.png',
    label: 'PASSWORD',
    iconRight: '/setasetup.png',
    altText: 'Password icon',
  },
  {
    icon: '/sound.png',
    label: 'SOUND',
    iconRight: '/setasetup.png',
    altText: 'Sound icon',
  },
  {
    icon: '/imgsetup.png',
    label: 'EXIT',
    iconRight: '/setasetup.png',
    altText: 'Exit icon',
  },
];

export default function SetupScreen() {
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

      {/* Conteúdo principal */}
      <main className="relative z-20 flex overflow-hidden flex-col bg-white rounded-[44px] px-10 py-10 max-md:px-5">
        <section className="flex relative flex-col justify-center w-full min-h-[872px]">
          <div className="flex relative flex-col px-16 pt-9 pb-32 bg-slate-900 bg-opacity-50 rounded-[44px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <h1 className="self-center text-2xl font-bold text-white">SETUP</h1>
            <div className="flex flex-col px-3.5 pt-9 pb-20 mt-12 -mb-6 bg-white rounded-[40px] w-[313px] max-md:mt-10 max-md:mb-2.5">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="flex gap-10 items-center px-2.5 py-1.5 mt-4 rounded-3xl bg-slate-900 max-md:mr-1"
                >
                  <Image
                    src={item.icon}
                    alt={item.altText}
                    width={45}
                    height={45}
                    className="object-contain shrink-0 aspect-square"
                  />
                  <span className="grow shrink self-stretch my-auto text-xl font-bold text-zinc-100 w-[94px]">
                    {item.label}
                  </span>
                  <div className="flex flex-col justify-center items-center px-2 my-auto bg-white rounded-full h-[38px] w-[38px]">
                    <Image
                      src={item.iconRight}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain w-6 aspect-square"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";
import React, { FC, useEffect } from "react";
import Image from "next/image";
import { ConnectButton } from 'thirdweb/react'; 
import { client } from '../../../lib/client';
import { useRouter } from 'next/navigation';

interface MetamaskPageProps {}

const MetamaskPage: FC<MetamaskPageProps> = () => {
  const router = useRouter();
  const logoSrc = "/metamask.png";

  // Função chamada após conexão
  const handleConnect = () => {
    router.push('/game/oncards');
  };

  return (
    <main className="relative flex overflow-hidden flex-col text-xl font-bold text-white min-h-screen">
      <video className="absolute inset-0 object-cover w-full h-full -z-10" autoPlay loop muted>
        <source src="/estadionoite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="fixed top-4 right-28 z-50 p-2 z-[1000] bg-white rounded-md shadow-lg">
        <ConnectButton
          client={client}
          theme="light"
          connectModal={{ size: 'compact' }}
          onConnect={handleConnect} // Redireciona após a conexão
        />
      </div>

      <section className="flex relative flex-col justify-center items-center px-16 py-24 w-full min-h-screen max-md:px-5">
        <div className="flex flex-col items-center justify-center p-8 bg-slate-900 bg-opacity-70 rounded-lg shadow-lg max-w-md w-full z-10">
          <div className="flex relative gap-4 mb-4 items-center">
            <Image
              src={logoSrc}
              alt="Metamask logo"
              width={69}
              height={69}
              className="object-contain"
              priority
            />
            <h1 className="text-center text-2xl">PLEASE CONFIRM IN METAMASK</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MetamaskPage;

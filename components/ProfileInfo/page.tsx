"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Dashboard from '../Dashboard/page'; 

interface ProfileInfoProps {
  email: string;
  nftCount: number;
  mycfBalance: number;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ email, nftCount, mycfBalance }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full max-md:px-5">
      <div className="flex relative flex-col items-start max-md:mt-10">
        <Image
          src="/Logo.png"
          alt="User avatar"
          width={168}
          height={168}
          className="object-contain self-start mr-9 max-w-full aspect-square max-md:mr-2.5"
        />

        {/* Informações do perfil com imagem de fundo */}
        <div className="relative flex flex-col px-16 py-9 mt-1 ml-5 max-w-full text-base font-semibold whitespace-nowrap aspect-[3.476] text-slate-900 text-opacity-80 w-[292px] max-md:px-5 max-md:ml-0">
          <Image
            src="/red.png"
            alt=""
            layout="fill"
            className="object-cover absolute inset-0 z-0" // Coloca a imagem em uma camada atrás do texto
          />
          <span className="relative z-10 translate-y-[-10px] translate-x-[40px]">{email}</span>
        </div>
        
        <div className="relative flex flex-col py-9 pr-16 pl-20 mt-1 max-w-full text-xl font-semibold aspect-[3.476] text-slate-900 text-opacity-80 w-[292px] max-md:px-5">
          <Image
            src="/red.png"
            alt=""
            layout="fill"
            className="object-cover absolute inset-0 z-0"
          />
          <span className="relative z-10 translate-y-[-10px] translate-x-[40px]">{nftCount} NFT</span>
        </div>
        
        <div className="relative flex flex-col px-16 py-9 mt-3 max-w-full text-xl font-semibold whitespace-nowrap aspect-[3.476] text-slate-900 text-opacity-80 w-[292px] max-md:px-5">
          <Image
            src="/red.png"
            alt=""
            layout="fill"
            className="object-cover absolute inset-0 z-0"
          />
          <span className="relative z-10 translate-y-[-10px] translate-x-[40px]">{mycfBalance}$MYCF</span>
        </div>
       
      </div>
    </div>
  );
};

export default ProfileInfo;

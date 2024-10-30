import React from 'react';
import Image from 'next/image';

interface ProfileInfoProps {
  email: string;
  nftCount: number;
  mycfBalance: number;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ email, nftCount, mycfBalance }) => {
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
        
        {/* Informações do perfil */}
        <div className="flex relative flex-col px-16 py-9 mt-1 ml-5 max-w-full text-base font-semibold whitespace-nowrap aspect-[3.476] text-slate-900 text-opacity-80 w-[292px] max-md:px-5 max-md:ml-0">
          <Image
            src="/red.png"
            alt=""
            layout="fill"
            className="object-cover absolute inset-0"
          />
          {email}
        </div>
        <div className="flex relative flex-col py-9 pr-16 pl-20 mt-1 max-w-full text-xl font-semibold aspect-[3.476] text-slate-900 text-opacity-80 w-[292px] max-md:px-5">
          <Image
            src="/red.png"
            alt=""
            layout="fill"
            className="object-cover absolute inset-0"
          />
          {nftCount} NFT
        </div>
        <div className="flex relative flex-col px-16 py-9 mt-3 max-w-full text-xl font-semibold whitespace-nowrap aspect-[3.476] text-slate-900 text-opacity-80 w-[292px] max-md:px-5">
          <Image
            src="/red.png"
            alt=""
            layout="fill"
            className="object-cover absolute inset-0"
          />
          {mycfBalance}$MYCF
        </div>
      </div>
      
      {/* Botões de ação */}
      <section className="flex flex-col self-stretch pr-1.5 pl-6 mt-7 w-full max-md:pl-5">
        <div className="flex gap-2.5 items-center px-2.5 pt-1.5 mt-3.5 rounded-3xl bg-slate-900">
          <Image
            src="/onchainsetup.png"
            alt=""
            width={52}
            height={52}
            className="object-contain shrink-0"
          />
          <div className="grow shrink self-stretch my-auto text-lg font-bold text-zinc-100 w-[143px]">
            ON CHAIN CARDS
          </div>
          <div className="flex flex-col justify-center items-center self-stretch px-2 my-auto bg-white rounded-full h-[37px] w-[37px]">
            <Image
              src="/setasetup.png"
              alt=""
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="flex gap-2.5 items-center px-2.5 pt-1.5 mt-3.5 rounded-3xl bg-slate-900">
          <Image
            src="/cardssetup.png"
            alt=""
            width={52}
            height={52}
            className="object-contain shrink-0"
          />
          <div className="grow shrink self-stretch my-auto text-lg font-bold text-zinc-100 w-[143px]">
            BUY MORE CARDS
          </div>
          <div className="flex flex-col justify-center items-center self-stretch px-2 my-auto bg-white rounded-full h-[37px] w-[37px]">
            <Image
              src="/setasetup.png"
              alt=""
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo;

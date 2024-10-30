"use client";
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const logoSrc = "/Logo.png"; 

const navigationItems = [
  {
    icon: '/web2setup.png',
    title: 'ON GAME CARDS',
    iconAlt: 'Game cards icon',
    path: '/game/oncards'  // Caminho para ON GAME CARDS
  },
  {
    icon: '/onchainsetup.png',
    title: 'ON CHAIN CARDS',
    iconAlt: 'Chain cards icon',
    path: '/game/onchaincards'  // Caminho para ON CHAIN CARDS
  },
  {
    icon: '/cardssetup.png',
    title: 'BUY CARDS',
    iconAlt: 'Buy cards icon',
    path: '/game/buycards'  // Caminho para BUY CARDS
  },
  {
    icon: '/imgsetup.png',
    title: 'EXIT',
    iconAlt: 'Exit icon',
    path: '/'  // Caminho para sair (exemplo: página inicial)
  }
];

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      <video className="absolute w-full h-full object-cover -z-10" autoPlay muted loop>
        <source src="/estadionoite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex justify-center mt-10">
        <Image src={logoSrc} alt="Logo" width={200} height={100} className="object-cover" />
      </div>

      <section className="flex relative flex-col justify-center items-center px-20 py-44 w-full min-h-[872px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <nav className="flex relative flex-col items-end px-20 pt-48 pb-20 -mb-9 ml-12 max-w-full bg-slate-900 bg-opacity-60 rounded-[49px] w-[797px] max-md:px-5 max-md:pt-24 max-md:mb-2.5">
          <div className="flex flex-col max-w-full w-[282px]">
            {navigationItems.map((item, index) => (
              <button 
                key={index} 
                onClick={() => handleNavigation(item.path)}  // Adiciona o redirecionamento
                className="flex gap-4 items-start px-4 pt-2 mt-4 rounded-3xl bg-slate-900"
              >
                <Image 
                  src={item.icon} 
                  alt={item.iconAlt} 
                  width={42} 
                  height={42} 
                  className="object-contain shrink-0" 
                  loading="lazy" 
                />
                <span className="grow shrink self-stretch my-auto text-lg font-bold text-zinc-100">
                  {item.title}
                </span>
                <div className="flex flex-col justify-center items-center px-2 bg-white rounded-full h-[37px] w-[37px]">
                  <Image 
                    src="/setasetup.png" 
                    alt="" 
                    width={24} 
                    height={24} 
                    className="object-contain" 
                    loading="lazy" 
                  />
                </div>
              </button>
            ))}
          </div>
        </nav>
      </section>
    </main>
  );
};

export default Dashboard;

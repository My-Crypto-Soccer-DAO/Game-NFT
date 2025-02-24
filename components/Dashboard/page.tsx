"use client";
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const navigationItems = [
  {
    icon: '/web2setup.png',
    title: 'ON GAME CARDS',
    iconAlt: 'Game cards icon',
    path: '/game/oncards'
  },
  {
    icon: '/onchainsetup.png',
    title: 'ON CHAIN CARDS',
    iconAlt: 'Chain cards icon',
    path: '/game/onchaincards'
  },
  {
    icon: '/cardssetup.png',
    title: 'BUY CARDS',
    iconAlt: 'Buy cards icon',
    path: '/marketplace'
  },
  {
    icon: '/imgsetup.png',
    title: 'EXIT',
    iconAlt: 'Exit icon',
    path: '/'
  }
];

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen text-white">
      <nav className="flex flex-col items-center mt-10">
        <div className="flex flex-col w-full max-w-[90%] sm:max-w-[400px]">
          {navigationItems.map((item, index) => (
            <button 
              key={index} 
              onClick={() => handleNavigation(item.path)}
              className="
                flex items-center justify-between gap-4 px-4 py-2 mt-4 rounded-3xl bg-slate-900
                text-sm sm:text-base md:text-lg lg:text-xl
                h-16 min-w-[250px] text-white transition-colors duration-300 border border-white rounded-lg 
             bg-transparent hover:outline hover:outline-2 hover:outline-light-blue hover:outline-offset-2 
             hover:bg-light-blue hover:text-dark-blue focus:outline-none 
             focus:ring focus:ring-blue-300 shadow-lg hover:shadow-[0px_0px_40px_20px_rgba(0,255,255,0.5)] // 
              "
            >
              <Image 
                src={item.icon} 
                alt={item.iconAlt} 
                width={36} 
                height={36} 
                className="object-contain w-8 h-8" 
                loading="lazy" 
              />
              <span className="grow text-zinc-100 font-bold text-center">
                {item.title}
              </span>
              <div className="
                flex items-center justify-center bg-white rounded-full
                h-8 w-8 // Tamanho fixo para o contêiner da seta
              ">
                <Image 
                  src="/setasetup.png" 
                  alt="Seta icon" 
                  width={24} 
                  height={24} 
                  className="object-contain w-full h-full"
                  loading="lazy" 
                />
              </div>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;

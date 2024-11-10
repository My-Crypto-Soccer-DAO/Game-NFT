"use client";
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ConnectButton } from 'thirdweb/react'; 
import { client } from '../../../lib/client';
import { ThirdwebProvider } from 'thirdweb/react';

const logoSrc = "/Logo.png"; 

const navigationItems = [
  { icon: '/web2setup.png', title: 'ON GAME CARDS', path: '/game/oncards' },
  { icon: '/onchainsetup.png', title: 'ON CHAIN CARDS', path: '/game/onchaincards' },
  { icon: '/cardssetup.png', title: 'BUY CARDS', path: '/game/marketplace' },
  { icon: '/imgsetup.png', title: 'EXIT', path: '/' }
];

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleConnect = () => {
    console.log('Conectado com sucesso!');
  };

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay muted loop>
        <source src="/estadionoite.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-center mt-6 sm:mt-10">
        <Image 
          src={logoSrc} 
          alt="Logo" 
          width={200} 
          height={100} 
          className="w-32 sm:w-48 md:w-60 lg:w-72" 
        />
      </div>

      <section className="flex flex-col sm:flex-row justify-center items-center px-4 py-10 sm:py-20 w-full min-h-[872px]">
        <nav className="flex flex-col sm:flex-row items-center px-4 py-8 bg-slate-900 bg-opacity-60 rounded-[49px] w-full sm:w-[600px] p-6">
          <div className="w-full sm:w-1/2">
            <div className="mb-6 -mt-4"> 
              <ConnectButton
                client={client}
                theme="light"
                connectModal={{ size: 'compact' }}
                onConnect={handleConnect}
              />
            </div>

            <Image
              src="/kicking3.png"
              alt="Kicking Image"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover rounded-l-[49px]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/2">
            {navigationItems.map((item, index) => (
              <button 
                key={index} 
                onClick={() => router.push(item.path)} 
                className="flex gap-4 items-center justify-between px-4 py-2 mt-4 rounded-3xl bg-slate-900 w-full hover:shadow-[0px_0px_20px_10px_rgba(0,255,255,0.5)] "
              >
                <div className="flex items-center gap-4">
                  <Image src={item.icon} alt={item.title} width={42} height={42} loading="lazy" />
                  <span className="text-lg font-bold text-zinc-100">
                    {item.title}
                  </span>
                </div>
                <div className="flex justify-center items-center px-2 bg-white rounded-full h-[37px] w-[37px]">
                  <Image src="/setasetup.png" alt="" width={24} height={24} loading="lazy" />
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

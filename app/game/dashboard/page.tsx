"use client";
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const logoSrc = "/Logo.png"; 

const navigationItems = [
  { icon: '/web2setup.png', title: 'ON GAME CARDS', path: '/game/oncards' },
  { icon: '/onchainsetup.png', title: 'ON CHAIN CARDS', path: '/game/onchaincards' },
  { icon: '/cardssetup.png', title: 'BUY CARDS', path: '/game/buycards' },
  { icon: '/imgsetup.png', title: 'EXIT', path: '/' }
];

const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      <video className="absolute w-full h-full object-cover -z-10" autoPlay muted loop>
        <source src="/estadionoite.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-center mt-10">
        <Image src={logoSrc} alt="Logo" width={200} height={100} />
      </div>

      <section className="flex flex-col sm:flex-row justify-center items-center px-5 py-20 w-full min-h-[872px]">
        <nav className="flex flex-col sm:flex-row items-center px-5 pt-20 bg-slate-900 bg-opacity-60 rounded-[49px] w-full sm:w-[600px]">
          
          {/* Imagem à esquerda */}
          <div className="w-full sm:w-1/2">
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

          
          <div className="flex flex-col items-center w-full sm:w-1/2 ">
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

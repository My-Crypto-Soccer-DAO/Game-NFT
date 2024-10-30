"use client";
import React from 'react';
import ProfileInfo from '../../../components/ProfileInfo/page'; 
import CardSection from '../../../components/CardSection/page'; 
import Dashboard from '../../../components/Dashboard/page'; 

const OnCardPage: React.FC = () => {
  const userEmail = "USER@GMAIL.COM"; // Coloque o email do usuário aqui
  const userNftCount = 25; // Defina a contagem de NFTs
  const userMycfBalance = 2000; // Defina o saldo

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      {/* Vídeo de fundo que cobre toda a tela */}
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay muted loop>
        <source src="/estadionoite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="flex relative justify-center items-center w-full max-md:px-5 max-md:py-24">
        <nav className="flex flex-col md:flex-row items-start justify-between px-5 md:px-20 py-10 bg-slate-900 bg-opacity-60 w-full max-w-[1200px] rounded-lg shadow-lg">
          <div className="flex w-full md:w-1/3">
            <ProfileInfo 
              email={userEmail} 
              nftCount={userNftCount} 
              mycfBalance={userMycfBalance} 
            />
          </div>
          
          <div className="flex w-full md:w-2/3">
            <div className="flex flex-col w-full">
              <CardSection />
            </div>
          </div>
          <Dashboard />
        </nav>
      </section>
    </main>
  );
};

export default OnCardPage;

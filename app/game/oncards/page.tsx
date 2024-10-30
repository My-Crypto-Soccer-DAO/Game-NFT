import React from 'react';
import ProfileInfo from '../../../components/ProfileInfo/page'; 
import CardSection from '../../../components/CardSection/page'; 

const OnCardPage: React.FC = () => {
  // Defina as propriedades que você deseja passar para o ProfileInfo
  const userEmail = "USER@GMAIL.COM"; // Coloque o email do usuário aqui
  const userNftCount = 25; // Defina a contagem de NFTs
  const userMycfBalance = 2000; // Defina o saldo

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen text-white">
      
      <video className="absolute w-full h-full object-cover -z-10" autoPlay muted loop>
        <source src="/estadionoite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="flex relative justify-center items-center w-full min-h-[872px] max-md:px-5 max-md:py-24">
        <nav className="flex relative flex-row items-start justify-between px-20 py-10 bg-slate-900 bg-opacity-60 w-full max-w-[1200px] h-[700px] max-md:w-[90%] max-md:h-[1000px]"> {/* Ajuste a largura e a altura */}
          <div className="flex w-1/3 max-md:w-full">
            <ProfileInfo 
              email={userEmail} 
              nftCount={userNftCount} 
              mycfBalance={userMycfBalance} 
            />
          </div>
          
          <div className="flex w-2/3 max-md:w-full">
            <CardSection />
          </div>
        </nav>
      </section>
    </main>
  );
};

export default OnCardPage;

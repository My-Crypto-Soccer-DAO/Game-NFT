import React from 'react';
import PlayerCard from '../PlayerCard/page';

const players = [
  { name: 'APODI', position: '', imageSrc: '/APodi.jpg' },
  { name: 'AGHATA', position: '', imageSrc: '/nftagatha.png' },
  { name: 'RAUL', position: '', imageSrc: '/raul.jpg' },
  { name: 'VERONIKA', position: '', imageSrc: '/veronika.avif' }
];

const CardSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-gray-900">
      <div className="relative grow mt-1.5 h-screen overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-blue-neon">
        <div className="flex flex-wrap gap-5 max-md:flex-col max-md:items-center">
          <div className="flex flex-col w-full">
            <div className="flex relative flex-col w-full">
              <div className="flex flex-wrap justify-start gap-10 text-3xl font-semibold text-white w-full p-5">
                {players.map((player, index) => (
                  <PlayerCard key={index} name={player.name} position={player.position} imageSrc={player.imageSrc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

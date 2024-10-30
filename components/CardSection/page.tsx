import React from 'react';
import PlayerCard from '../PlayerCard/page';

const players = [
  { name: 'APODI', position: '', imageSrc: '/APodi.jpg' },
  { name: 'AGHATA', position: 'MIDFLER', imageSrc: '/nftagatha.png' },
  { name: 'RAUL', position: '', imageSrc: '/raul.jpg' },
  { name: 'VERONIKA', position: '', imageSrc: '/veronika.avif' }
];

const CardSection: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
      <div className="relative grow mt-1.5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col w-full max-md:mt-5 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 ml-11 max-w-full text-3xl font-semibold text-white w-[579px]">
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

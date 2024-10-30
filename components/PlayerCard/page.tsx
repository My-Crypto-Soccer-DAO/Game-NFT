import React from 'react';
import Image from 'next/image';

interface PlayerCardProps {
  name: string;
  position: string;
  imageSrc: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, position, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={imageSrc} alt={name} width={100} height={100} className="rounded-full" />
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default PlayerCard;

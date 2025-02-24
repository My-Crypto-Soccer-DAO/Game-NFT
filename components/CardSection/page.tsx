import React, { useEffect, useState } from 'react';
import { NFT, ThirdwebSDK } from '@thirdweb-dev/sdk';
import PlayerCard from '../PlayerCard/page';
import { useAddress, useContract } from '@thirdweb-dev/react';

const CardSection: React.FC = () => {
  const address = useAddress(); // Hook para pegar o endereço da carteira conectada
  const { contract } = useContract('0x23E539FC7174037F1580832A000F0b7b140A2056', 'nft-collection'); // Substitua pelo endereço do contrato

  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (contract && address) {
        try {
          const ownedNfts = await contract.getOwned(address);
          setNfts(ownedNfts as NFT[]); // Conversão explícita se necessário
        } catch (error) {
          console.error('Erro ao buscar NFTs:', error);
        }
      }
    };

    fetchNFTs();
  }, [contract, address]);

  return (
    <div className="flex flex-col w-full bg-gray-900">
      <div className="relative grow mt-1.5 h-screen overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-blue-neon">
        <div className="flex flex-wrap gap-5 max-md:flex-col max-md:items-center">
          <div className="flex flex-col w-full">
            <div className="flex relative flex-col w-full">
              <div className="flex flex-wrap justify-start gap-10 text-3xl font-semibold text-white w-full p-5">
                {nfts.length > 0 ? (
                  nfts.map((nft, index) => (
                    <PlayerCard
                    key={index}
                    name={String(nft.metadata.name) || 'NFT'} // Converte name para string
                    position=""
                    imageSrc={nft.metadata.image || '/placeholder.jpg'} // Imagem de substituição
                  />
                  ))
                ) : (
                  <p className="text-white">Nenhuma NFT encontrada.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

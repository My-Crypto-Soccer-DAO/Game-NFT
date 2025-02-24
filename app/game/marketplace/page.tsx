"use client";
import React, { useEffect, useState } from 'react';
import { useAddress, useContract, useContractWrite } from '@thirdweb-dev/react';

const MarketplacePage = () => {
  const address = useAddress(); // Endereço da carteira conectada
  const { contract } = useContract("0x23E539FC7174037F1580832A000F0b7b140A2056"); // Substitua pelo endereço do contrato
  const { mutateAsync: buyNFT } = useContractWrite(contract, "buyNFT");

  const [nfts, setNfts] = useState<{ tokenId: number; price: number }[]>([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!contract) return;
      // Chame uma função do contrato para obter os NFTs listados
      const listedNFTs = await contract.call("getListedNFTs");
      setNfts(listedNFTs);
    };

    fetchNFTs();
  }, [contract]);

  const handleBuy = async (tokenId: number, price: number) => {
    try {
      if (!address) {
        alert("Conecte sua carteira para continuar!");
        return;
      }

      await buyNFT({ args: [tokenId], overrides: { value: price } });
      alert("Compra realizada com sucesso!");
    } catch (error) {
      console.error("Erro ao comprar NFT:", error);
    }
  };

  return (
    <div className="relative min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
      >
        <source src="/estadionoite.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col items-center pt-10">
        <h1 className="text-4xl text-white mb-6">Marketplace de NFTs</h1>
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] p-4 bg-blue-900 bg-opacity-70 rounded-lg overflow-y-auto scrollbar scrollbar-thumb-neon-blue scrollbar-track-transparent max-h-[70vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {nfts.map((nft, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-lg flex flex-col items-center text-center"
              >
                <p className="text-white">Token ID: {nft.tokenId}</p>
                <p className="text-white">Preço: {nft.price} ETH</p>
                <button
                  className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-700"
                  onClick={() => handleBuy(nft.tokenId, nft.price)}
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #0ff transparent;
        }
        .scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar::-webkit-scrollbar-thumb {
          background-color: #0ff;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default MarketplacePage;

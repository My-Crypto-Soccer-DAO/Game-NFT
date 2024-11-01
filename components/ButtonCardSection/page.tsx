import React, { useState } from 'react';

const ButtonCardSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'ALL' | 'CLEAR'>('ALL');

  return (
    <div className="flex flex-wrap gap-4 mt-8 items-center">
     
      <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#00bfff] to-[#1e90ff] hover:from-[#1e90ff] hover:to-[#00bfff] transition-all duration-300 rounded-md shadow-md">
        ?MYCS
      </button>

     
      <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#00bfff] to-[#1e90ff] hover:from-[#1e90ff] hover:to-[#00bfff] transition-all duration-300 rounded-md shadow-md">
        ?NFTS
      </button>

     
      <div className="flex rounded-full border border-[#00bfff] overflow-hidden shadow-md">
        <button
          onClick={() => setSelectedOption('ALL')}
          className={`px-4 py-2 font-semibold transition-all duration-300 ${
            selectedOption === 'ALL' ? 'bg-[#00bfff] text-white' : 'bg-transparent text-[#00bfff]'
          }`}
        >
          ALL
        </button>
        <button
          onClick={() => setSelectedOption('CLEAR')}
          className={`px-4 py-2 font-semibold transition-all duration-300 ${
            selectedOption === 'CLEAR' ? 'bg-[#00bfff] text-white' : 'bg-transparent text-[#00bfff]'
          }`}
        >
          CLEAR
        </button>
      </div>

      <div className="flex gap-4 mt-4 sm:mt-0">
        <button className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 transition-all duration-300 rounded-full shadow-md">
          DEPOSIT
        </button>
        <button className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 transition-all duration-300 rounded-full shadow-md">
          DEPOSIT MYCS
        </button>
      </div>
    </div>
  );
};

export default ButtonCardSection;

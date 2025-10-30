import React, { useState } from 'react';

import { ChevronDown } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#ffffff0d]  border border-neutral-800 rounded-md transition-all duration-300 overflow-hidden ${
        isOpen ? 'shadow-[0_0_15px_rgba(255,255,255,0.05)]' : ''
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium"
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-gray-300 text-[15px] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;

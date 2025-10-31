import React from 'react';

export default function WorkflowCard({ img, title, description }) {
  return (
    <div className="flex flex-col items-start gap-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#2d2d2d] transition-colors">
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={title}
          className="max-w-13 max-h-13 object-contain rounded-full"
        />

        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      </div>
      <p className="text-gray-400 text-[16px] font-inter">{description}</p>
    </div>
  );
}

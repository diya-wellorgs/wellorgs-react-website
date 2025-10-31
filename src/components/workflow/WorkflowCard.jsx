import React from 'react';

export default function WorkflowCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#2d2d2d] transition-colors">
      <div className="w-7 h-7">{icon}</div>
      <div>
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

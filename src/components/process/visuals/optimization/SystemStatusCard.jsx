import {
  ArrowUp,
  Check,
  Cog,
  Funnel,
  Loader2,
  MessageSquare,
} from 'lucide-react';

const iconMap = {
  chatbot: <MessageSquare className="text-white w-5 h-5" />,
  workflow: <Cog className="text-white w-5 h-5" />,
  sales: <Funnel className="text-white w-5 h-5" />,
};

const statusIconMap = {
  loading: <Loader2 className="text-tertiary w-5 h-5 animate-spin" />,
  update: <ArrowUp className="text-tertiary w-5 h-5" />,
  done: <Check className="text-tertiary w-5 h-5" />,
};

export default function SystemStatusCard({ type, title, subtitle, status }) {
  return (
    <div className="flex gap-2 justify-between items-center bg-[#0f0f0f] border border-[#2a2a2a] rounded-md px-4 py-2  ">
      <div className="flex items-center gap-3">
        <div className="bg-[#181818] p-2.5 rounded-md flex items-center justify-center">
          {iconMap[type]}
        </div>
        <div>
          <h3 className="text-white font-semibold text-[15px]">{title}</h3>
          <p className="text-gray-400 text-12">{subtitle}</p>
        </div>
      </div>
      {statusIconMap[status]}
    </div>
  );
}

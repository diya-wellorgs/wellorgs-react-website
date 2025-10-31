import {
  ArrowUp,
  Check,
  Cog,
  Funnel,
  Loader2,
  MessageSquare,
} from 'lucide-react';

const iconMap = {
  chatbot: <MessageSquare className="text-white w-4 h-4" />,
  workflow: <Cog className="text-white w-4 h-4" />,
  sales: <Funnel className="text-white w-4 h-4" />,
};

const statusIconMap = {
  loading: <Loader2 className="text-tertiary w-5 h-5 animate-spin" />,
  update: <ArrowUp className="text-tertiary w-5 h-5" />,
  done: <Check className="text-tertiary w-5 h-5" />,
};

export default function SystemStatusCard({ type, title, subtitle, status }) {
  return (
    <div className="flex gap-2  justify-between items-center   border border-[#2a2a2a] rounded-md px-2 py-1  ">
      <div className="flex items-center gap-3">
        <div className="bg-[#181818] p-1.5 rounded-md flex items-center justify-center">
          {iconMap[type]}
        </div>
        <div>
          <h3 className="text-white font-semibold text-[12px]">{title}</h3>
          <p className="text-gray-400 text-[10px]">{subtitle}</p>
        </div>
      </div>
      {statusIconMap[status]}
    </div>
  );
}

import Button from './ui/Button';
import { NumberTicker } from './ui/NumberTicker';

export default function StatisticsSection() {
  const stats = [
    { value: '15+', label: 'Awards.' },
    { value: '200+', label: 'Projects.' },
    { value: '1.5K', label: 'Clients.' },
  ];

  return (
    <div className="relative py-20 px-5   w-full">
      <div className="flex flex-wrap justify-start gap-40 text-[#808080] z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <NumberTicker
              value={stat.value}
              className="text-[64px] font-bold"
            >
              {stat.value}
            </NumberTicker>
            <span className="text-[22px] font-bold ">{stat.label}</span>
          </div>
        ))}
        <div>
          <Button text="Book a free call" />
        </div>
      </div>
    </div>
  );
}

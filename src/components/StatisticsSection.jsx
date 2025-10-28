export default function StatisticsSection() {
  const stats = [
    { value: '15+', label: 'Awards.' },
    { value: '200+', label: 'Projects.' },
    { value: '1.5K', label: 'Clients.' },
  ];

  return (
    <div className="relative py-20 px-5  w-full">
      <div className="absolute inset-0 bg-gradient "></div>

      <div className="relative flex flex-wrap justify-center gap-40 text-[#808080] z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <span className="text-[64px] font-bold">{stat.value}</span>
            <span className="text-[22px] font-bold ">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

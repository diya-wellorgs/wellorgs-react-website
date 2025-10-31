import SystemStatusCard from './SystemStatusCard';

export default function Optimize() {
  const systems = [
    {
      type: 'chatbot',
      title: 'Chatbot system',
      subtitle: 'Efficiency will increase by 20%',
      status: 'loading',
    },
    {
      type: 'workflow',
      title: 'Workflow system',
      subtitle: 'Update available..',
      status: 'update',
    },
    {
      type: 'sales',
      title: 'Sales system',
      subtitle: 'Up to date',
      status: 'done',
    },
  ];

  return (
    <section className=" px-3 py-3 h-[180px] space-y-2 border border-[#2a2a2a]  max-w-md">
      {systems.map((system, index) => (
        <SystemStatusCard
          key={index}
          {...system}
        />
      ))}
    </section>
  );
}

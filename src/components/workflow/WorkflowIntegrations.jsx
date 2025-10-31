import React from 'react';

import { FaDiscord, FaGoogleDrive, FaWhatsapp } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';

import WorkflowCard from './WorkflowCard';

export default function WorkflowIntegrations() {
  const integrations = [
    {
      icon: <FaGoogleDrive className="text-[#34A853] w-7 h-7" />,
      title: 'Google Drive',
      description:
        'Organize and access your documents effortlessly with smart file suggestions.',
    },
    {
      icon: <FaDiscord className="text-[#5865F2] w-7 h-7" />,
      title: 'Discord',
      description:
        'Keep your community engaged with real-time moderation and message suggestions.',
    },
    {
      icon: <FaWhatsapp className="text-[#25D366] w-7 h-7" />,
      title: 'Whatsapp',
      description:
        'Generate smart replies and enhance your messaging experience.',
    },
    {
      icon: <SiOpenai className="text-[#A8A29E] w-7 h-7" />,
      title: 'Open AI',
      description:
        'Connect your favorite apps and automate workflows effortlessly with AI assistance.',
    },
  ];

  return (
    <section className="bg-[#0b0b0b] max-w-8xl rounded-3xl p-10 md:p-16 mt-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-white text-4xl font-semibold mb-6">
            Seamless Integrations for a Smarter Workflow
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Wellorgs AI connects the tools your team already uses bringing
            everything into one smooth, automated system. From syncing messages
            and files to triggering actions across platforms, we remove the
            manual work so your business runs faster, smarter, and more
            efficiently.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6">
          {integrations.map((item, index) => (
            <WorkflowCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

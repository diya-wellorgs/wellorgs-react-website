import React from 'react';

import { motion } from 'motion/react';

import asana from '../../assets/asana.png';
import aws from '../../assets/aws.png';
import discord from '../../assets/discord.png';
import googledrive from '../../assets/google.png';
import microsoft from '../../assets/microsoft.png';
import openai from '../../assets/openai.png';
import twilio from '../../assets/twilio.png';
import whatsapp from '../../assets/whatsapp.png';
import WorkflowCard from './WorkflowCard';

export default function WorkflowIntegrations() {
  const integrationsLeft = [
    {
      img: microsoft,
      title: 'Azure',
      description:
        'Deploy and scale AI models securely using Azure’s serverless compute and managed endpoints.',
    },
    {
      img: googledrive,
      title: 'Google Drive',
      description:
        'Organize and access your documents effortlessly with smart file suggestions.',
    },
    {
      img: whatsapp,
      title: 'Whatsapp',
      description:
        'Generate smart replies and enhance your messaging experience.',
    },
    {
      img: twilio,
      title: 'Twilio',
      description:
        'Send SMS alerts, reminders, and two-factor codes automatically from your app.',
    },
    {
      img: microsoft,
      title: 'Azure',
      description:
        'Deploy and scale AI models securely using Azure’s serverless compute and managed endpoints.',
    },
    {
      img: googledrive,
      title: 'Google Drive',
      description:
        'Organize and access your documents effortlessly with smart file suggestions.',
    },
    {
      img: whatsapp,
      title: 'Whatsapp',
      description:
        'Generate smart replies and enhance your messaging experience.',
    },
    {
      img: twilio,
      title: 'Twilio',
      description:
        'Send SMS alerts, reminders, and two-factor codes automatically from your app.',
    },
  ];

  const integrationsRight = [
    {
      img: aws,
      title: 'AWS',
      description:
        'Deploy and scale AI models securely using AWS’s serverless compute and managed endpoints.',
    },
    {
      img: asana,
      title: 'Asana',
      description:
        'Streamline your project management with intelligent task insights and reminders.',
    },
    {
      img: discord,
      title: 'Discord',
      description:
        'Keep your community engaged with real-time moderation and message suggestions.',
    },
    {
      img: openai,
      title: 'Open AI',
      description:
        'Connect your favorite apps and automate workflows effortlessly with AI assistance.',
    },
    {
      img: aws,
      title: 'AWS',
      description:
        'Deploy and scale AI models securely using AWS’s serverless compute and managed endpoints.',
    },
    {
      img: asana,
      title: 'Asana',
      description:
        'Streamline your project management with intelligent task insights and reminders.',
    },
    {
      img: discord,
      title: 'Discord',
      description:
        'Keep your community engaged with real-time moderation and message suggestions.',
    },
    {
      img: openai,
      title: 'Open AI',
      description:
        'Connect your favorite apps and automate workflows effortlessly with AI assistance.',
    },
  ];

  return (
    <section className="bg-[#0b0b0b] max-w-[1450px] border border-neutral-800 mx-auto rounded-4xl  px-13  overflow-hidden max-h-[400px] flex">
      <div className="flex gap-4">
        {/* Left Text Section */}
        <div className=" flex flex-col items-start justify-center gap-6 ">
          <h2 className="text-white text-4xl ">
            Seamless Integrations for a Smarter Workflow
          </h2>
          <p className="text-gray-400 text-base ">
            Wellorgs AI connects the tools your team already uses bringing
            everything into one smooth, automated system. From syncing messages
            and files to triggering actions across platforms, we remove the
            manual work so your business runs faster, smarter, and more
            efficiently.
          </p>
        </div>

        {/* Animated Integrations Section */}
        <div className="grid grid-cols-2 gap-6 relative">
          {/* Left Column (moves upward) */}
          <motion.div
            className="flex flex-col gap-6"
            animate={{ y: ['0%', '-100%'] }}
            transition={{
              duration: 80,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...integrationsLeft, ...integrationsLeft].map((item, index) => (
              <WorkflowCard
                key={`left-${index}`}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>

          {/* Right Column (moves downward) */}
          <motion.div
            className="flex flex-col gap-6"
            animate={{ y: ['-90%', '0%'] }}
            transition={{
              duration: 80,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...integrationsRight, ...integrationsRight].map((item, index) => (
              <WorkflowCard
                key={`right-${index}`}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { BlueWave } from '../../icons';
import Chip from '../ui/Chip';
import GradientText from '../ui/GradientText';
import FaqItem from './FaqItem';

const faqData = [
  {
    question: 'How can AI automation help my business?',
    answer:
      'AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs.',
  },
  {
    question: 'Is AI automation difficult to integrate?',
    answer:
      'No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup.',
  },
  {
    question: 'What industries can benefit from AI automation?',
    answer:
      'AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, education, operations, and many more. Any business looking to improve efficiency can leverage AI.',
  },
  {
    question: 'Do I need technical knowledge to use AI automation?',
    answer:
      'Not at all. You don’t need to write a single line of code. We design everything to be clear, guided, and stress-free. From setup to scaling, our team supports you with walkthroughs and hands-on help. You focus on results, we’ll handle the tech.',
  },
  {
    question: 'Is this only for big companies?',
    answer:
      'Not at all. Whether you’re a 5-person startup or a 500-person enterprise, we tailor automations to your scale and budget.',
  },
];

const FaqSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-20 text-white">
      <div className=" w-full flex flex-col items-center justify-center gap-15 px-6 text-center mx-auto">
        {/* Section Badge */}
        <div className="w-full flex flex-col items-center justify-center gap-7">
          <Chip text=" FAQs" />
          {/* Gradient Heading & subheading*/}
          <GradientText
            title="We’ve Got the Answers You’re Looking For"
            subheading="Quick answers to your AI automation questions."
          />
        </div>

        <div className="relative max-w-3xl w-full">
          <BlueWave className="w-full h-auto absolute bottom-0 left-0 blur-[50px] opacity-30 z-10" />
          <div className="flex flex-col gap-4 z-20 relative">
            {faqData.map((faq, idx) => (
              <FaqItem
                key={idx}
                {...faq}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

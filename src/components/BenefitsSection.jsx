import {
  BarChart3,
  Clock,
  Database,
  DollarSign,
  //   Lightning,
  Smile,
} from 'lucide-react';
import { AiFillDollarCircle } from 'react-icons/ai';
import {
  BsFillBarChartLineFill,
  BsFillLightningChargeFill,
} from 'react-icons/bs';
import { FaChartPie } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { PiHandshakeFill } from 'react-icons/pi';

const benefitsData = [
  {
    icon: <BsFillLightningChargeFill className="w-6 h-6 text-white" />,
    title: 'Increased Productivity',
    description:
      'Gain actionable insights with AI-driven analytics to improve decision-making and strategy.',
  },
  {
    icon: <PiHandshakeFill className="w-6 h-6 text-white" />,
    title: 'Better Customer Experience',
    description:
      'Personalized AI interactions improve response times, customer engagement, and overall satisfaction.',
  },
  {
    icon: <IoTime className="w-6 h-6 text-white" />,
    title: '24/7 Availability',
    description:
      'AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.',
  },
  {
    icon: <AiFillDollarCircle className="w-6 h-6 text-white" />,
    title: 'Cost Reduction',
    description:
      'AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.',
  },
  {
    icon: <FaChartPie className="w-6 h-6 text-white" />,
    title: 'Data-Driven Insights',
    description:
      'Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.',
  },
  {
    icon: <BsFillBarChartLineFill className="w-6 h-6 text-white" />,
    title: 'Scalability & Growth',
    description:
      'AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Gradient Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient text-transparent bg-clip-text leading-tight">
          The Key Benefits of AI for Your Business Growth
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          Discover how AI automation enhances efficiency, reduces costs, and
          drives business growth with smarter, faster processes.
        </p>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-primary border border-neutral-800 rounded-md p-6 text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <div className="mb-3">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

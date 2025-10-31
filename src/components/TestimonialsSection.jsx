import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Carter',
    title: 'CEO at TechFlow Solutions',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'Wellorgs helped us integrate AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!',
  },
  {
    name: 'Sophia Martinez',
    title: 'Operations Manager at NexaCorp',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    feedback:
      'With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest! Kudos to Wellorgs for delivering such an impactful solution.',
  },
  {
    name: 'Emily Wong',
    title: 'Customer Success Lead at SupportHive',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    feedback:
      'Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to Wellorgs.',
  },
  {
    name: 'David Reynolds',
    title: 'Head of Sales at GrowthPeak',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    feedback:
      'AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions using Wellorgs AI custom solution to our product.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Badge */}
        <div className="inline-block mb-4">
          <span className="bg-neutral-900 border border-neutral-800 text-sm px-4 py-1 rounded-full">
            Testimonials
          </span>
        </div>

        {/* Gradient Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient  text-transparent bg-clip-text leading-tight">
          Why Businesses Love Our AI Solutions
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-16">
          Real businesses, real results with AI automation.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-[900px] mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gradient-primary-2 border border-neutral-800 rounded-md px-[30px] py-5 text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-white fill-white"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-300 mb-4 tracking-[-0.02em] leading-[1.4em]">
                "{t.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border border-neutral-700"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-12 text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

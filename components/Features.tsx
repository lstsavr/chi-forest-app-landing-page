import React from 'react';
import { Map, MessageCircle, Sparkles, Navigation } from 'lucide-react';

const features = [
  {
    name: 'Smart Navigation',
    description: 'Never wonder where to get your fix. Our detailed map shows nearby machines, stock levels, and walking directions instantly.',
    icon: Navigation,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    id: 'map'
  },
  {
    name: 'AI Recommendations',
    description: 'Not sure what you\'re craving? Ask our Genki AI. Whether you want "low sugar" or "fruity and sweet", we have the perfect match.',
    icon: Sparkles,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    id: 'ai'
  },
  {
    name: 'Genki Community',
    description: 'Join the flavor movement. Share reviews, discover trending drinks, and connect with other Chi Forest fans on campus.',
    icon: MessageCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    id: 'community'
  },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-green font-semibold tracking-wide uppercase">Key Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            More Than Just a Vending Machine
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We've digitized the hydration experience. Connect, explore, and enjoy seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-green rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div>
                <span className={`rounded-xl inline-flex p-3 ${feature.bgColor} ${feature.color} ring-4 ring-white`}>
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-brand-green transition-colors">
                  <a href={`#${feature.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {feature.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
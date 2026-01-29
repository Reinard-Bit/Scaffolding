import React from 'react';
import { ShieldCheck, Clock, PenTool, HardHat } from 'lucide-react';

const features = [
  {
    id: '1',
    title: 'Safety First',
    description: 'Every piece of equipment meets rigorous federal safety standards.',
    icon: ShieldCheck
  },
  {
    id: '2',
    title: '24/7 Response',
    description: 'Round-the-clock emergency response for critical shutdowns.',
    icon: Clock
  },
  {
    id: '3',
    title: 'Certified Teams',
    description: 'Expert erection and dismantling teams for complex projects.',
    icon: HardHat
  },
  {
    id: '4',
    title: 'Custom Design',
    description: 'In-house engineering and 3D modeling solutions.',
    icon: PenTool
  }
];

const Features = () => {
  return (
    <section id="why-us" className="py-32 bg-apex-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-industrial font-bold text-white mb-6 leading-tight">
              Why <br/><span className="text-gray-600">Apex?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We provide the safety infrastructure that empowers your workforce. Minimal downtime, maximum efficiency.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="group transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
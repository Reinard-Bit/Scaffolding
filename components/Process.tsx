import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Analysis',
    description: 'Site plan review and load requirement calculation.'
  },
  {
    number: '02',
    title: 'Logistics',
    description: 'Precision delivery scheduling synchronized with your timeline.'
  },
  {
    number: '03',
    title: 'Deployment',
    description: 'Rapid on-site installation by certified professionals.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-apex-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl font-light text-white tracking-wide uppercase">Operational Flow</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent z-0"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 bg-apex-black md:pr-8 group">
              <div className="w-24 h-24 flex items-center justify-center bg-apex-black border border-gray-800 rounded-full mb-8 group-hover:border-white transition-colors duration-500">
                <span className="font-industrial font-bold text-xl text-gray-500 group-hover:text-white transition-colors">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
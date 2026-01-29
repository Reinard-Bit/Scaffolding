import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxRef.current && scrolled <= window.innerHeight) {
        // Apply parallax effect: move image down at slower speed than scroll
        // Keep the scale-105 to prevent white edges during movement
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px) scale(1.05)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-apex-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070" 
          alt="Industrial Construction" 
          className="w-full h-full object-cover opacity-30 scale-105 will-change-transform" 
        />
        {/* Gradient Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center h-full">
        
        {/* Main Content - Left Aligned */}
        <div className="w-full md:w-2/3 pt-32 md:pt-0">
          <div className="mb-8 overflow-hidden">
            <div className="flex items-center gap-4 opacity-0 animate-slide-in-right">
              <div className="h-[1px] w-12 bg-white/50"></div>
              <span className="text-gray-400 text-xs font-mono tracking-[0.4em] uppercase">
                Est. 1998
              </span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10">
            <div className="overflow-hidden">
              <span className="block transform translate-y-full animate-reveal-up">BEYOND</span>
            </div>
            <div className="overflow-hidden">
              <span className="block transform translate-y-full animate-reveal-up delay-200 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">STRUCTURE</span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12">
            <p className="max-w-xl text-gray-400 text-lg leading-relaxed transform translate-y-full animate-reveal-up delay-300 border-l-2 border-white/20 pl-8">
              We engineer the skeletal framework of modern industry. 
              Advanced scaffolding solutions for high-stakes environments.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 opacity-0 animate-fade-in delay-500">
            <Button icon>Explore Fleet</Button>
            <Button variant="outline">View Portfolio</Button>
          </div>
        </div>

        {/* Stats / Right Side - Desktop Only */}
        <div className="hidden md:flex w-1/3 flex-col justify-end h-full pb-32 gap-12 opacity-0 animate-fade-in delay-700">
           <div className="text-right group cursor-default">
              <span className="block text-5xl font-industrial font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">2M+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2">Safe Man Hours</span>
           </div>
           <div className="text-right group cursor-default">
              <span className="block text-5xl font-industrial font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">450</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2">Active Projects</span>
           </div>
           
           <div className="absolute right-8 bottom-0 h-1/3 w-[1px] bg-gradient-to-b from-gray-800 to-white/20"></div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-1000">
         <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
         <ArrowDown className="w-4 h-4 text-white animate-bounce" />
      </div>

    </section>
  );
};

export default Hero;
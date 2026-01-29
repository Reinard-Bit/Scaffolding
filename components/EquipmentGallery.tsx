import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const equipment = [
  {
    id: '1',
    title: 'Frame Scaffolding',
    description: 'Versatile and easy-to-assemble steel frames ideal for masonry and general construction.',
    imageUrl: 'https://picsum.photos/id/103/600/400' 
  },
  {
    id: '2',
    title: 'System Scaffolding',
    description: 'Modular ring-lock systems designed for complex geometries and heavy industrial loads.',
    imageUrl: 'https://picsum.photos/id/203/600/400' 
  },
  {
    id: '3',
    title: 'Tube & Clamp',
    description: 'Infinite adjustability for the most challenging access requirements in refineries and plants.',
    imageUrl: 'https://picsum.photos/id/296/600/400' 
  },
  {
    id: '4',
    title: 'Suspended Access',
    description: 'Swing stages and powered platforms for high-rise maintenance and window replacement.',
    imageUrl: 'https://picsum.photos/id/102/600/400' 
  }
];

const EquipmentGallery = () => {
  return (
    <section id="equipment" className="py-24 bg-apex-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex justify-between items-end border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-4xl font-industrial font-bold text-white mb-4">Rental Fleet</h2>
            <p className="text-gray-400 max-w-lg">
              Our inventory is rigorously inspected and maintained to exceed OSHA standards.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors group mt-4 md:mt-0">
            Download Catalog <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {equipment.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-80 overflow-hidden border border-gray-800 bg-apex-black"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 font-industrial uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                  {item.description}
                </p>
                <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out" />
              </div>

              {/* Border Hover Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gray-500 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentGallery;
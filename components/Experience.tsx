
import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { EDUCATION_JOURNEY } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Education Journey
          </h2>
        </div>

        <div className="relative">
          {/* Central Vertical Line - Cyan/Blue as per screenshot */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent hidden lg:block -translate-x-1/2"></div>

          <div className="space-y-32">
            {EDUCATION_JOURNEY.map((item, index) => (
              <div key={item.id} className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-start">
                
                {/* Left Card: Rating & Image */}
                <div className={`flex flex-col items-center lg:items-end order-2 lg:order-1`}>
                  <div className="max-w-md w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:border-white/10">
                    <div className="flex mb-4 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-white fill-white" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed mb-8 font-medium">
                      {item.description}
                    </p>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5">
                      <img 
                        src={item.image} 
                        alt={item.school} 
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Center: Circle Icon */}
                <div className="order-1 lg:order-2 flex flex-col items-center z-10 pt-4">
                  <div className="w-16 h-16 rounded-full border-4 border-[#1a1a1a] bg-black p-2 shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden transition-transform duration-500 hover:scale-110">
                    <img 
                      src={item.logo} 
                      alt="School Logo" 
                      className="w-full h-full object-contain rounded-full" 
                    />
                  </div>
                </div>

                {/* Right Card: Details */}
                <div className="flex flex-col items-start order-3 pt-4">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 max-w-lg leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm font-medium mb-8 bg-neutral-900/50 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar size={16} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-widest italic">Responsibilities</p>
                    <ul className="space-y-4">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-base text-gray-100 leading-relaxed group">
                          <span className="text-white mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0 group-hover:scale-150 transition-transform"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


import React from 'react';
import { KEY_SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black min-h-[600px] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Subheader Pill */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 border border-white/10 text-gray-300 text-sm font-medium mb-8">
            🤝 What I Bring to the Table
          </div>
          
          {/* Main Title */}
          <h3 className="text-4xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
            How I Can Contribute & My Key Skills
          </h3>
        </div>

        {/* Skills Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {KEY_SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="group flex flex-col items-center justify-between w-[180px] h-[320px] md:w-[220px] md:h-[380px] bg-neutral-900/40 border border-white/5 rounded-[110px] p-8 transition-all duration-500 hover:bg-neutral-800/60 hover:border-blue-500/30 hover:-translate-y-2 cursor-default"
            >
              <div className="flex-1 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center transition-all duration-700 ease-out group-hover:scale-115 group-hover:rotate-[8deg]">
                  <img 
                    src={skill.iconUrl} 
                    alt={skill.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all duration-700 group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                  />
                </div>
              </div>
              
              <div className="mt-4 pb-4">
                <p className="text-sm md:text-base font-bold text-center tracking-wide text-gray-100 group-hover:text-blue-400 transition-colors duration-500">
                  {skill.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold mb-6">
            Featured <span className="text-blue-500">Work</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            A selection of projects showcasing modern web development and design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-300 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors shadow-lg"
                  >
                    Visit Site
                  </a>
                  <div className="flex gap-2">
                    <a 
                      href={project.liveUrl}
                      className="p-2.5 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-lg font-bold mb-3 text-blue-500/90">{project.title}</h4>
                <p className="text-gray-400 text-[13px] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[11px] font-medium text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
      gsap.fromTo('.hero-image', 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: 'power3.out',
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center z-10">
        <div>
          <h1 className="hero-text tracking-tight mb-4 leading-[1.1] font-['Lexend']">
            <span className="typing-text text-3xl md:text-6xl">
              Hello, I'm
            </span>
            <br />
            <span className="text-blue-500 text-6xl md:text-[73px] font-bold">
              Mohd Suhail
            </span>
          </h1>
          <p className="hero-text text-lg md:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-['Outfit']">
            Java Full Stack Developer building scalable web applications.
          </p>
          
          <div className="hero-text flex flex-wrap gap-4 mb-16">
            <a 
              href="#work" 
              className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl transition-all hover:bg-blue-700"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-white/10 text-white font-bold rounded-xl transition-all hover:bg-white/5"
            >
              Contact
            </a>
          </div>

          <div className="hero-text flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-gray-400 hover:text-white hover:bg-neutral-800 transition-all"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-image flex justify-center lg:justify-end">
          <div className="relative">
            {/* Circular Border with Blue Accent */}
            <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-[6px] border-blue-500/30">
              <img 
                src="/image/suhail.png" 
                alt="Mohd suhail" 
                className="w-full h-full object-cover object-top translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

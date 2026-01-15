
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
          alt="Restaurant Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-primary text-lg md:text-xl uppercase tracking-[0.5em] mb-4 opacity-0 animate-[fadeInDown_1s_ease_forwards]">
          Exquisite Gastronomy
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 opacity-0 animate-[fadeIn_1s_ease_0.3s_forwards]">
          A Symphony of <span className="italic">Flavors</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-0 animate-[fadeIn_1s_ease_0.6s_forwards]">
          Experience a culinary journey where traditional techniques meet modern innovation in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_1s_ease_0.9s_forwards]">
          <a
            href="#reservation"
            className="px-10 py-4 bg-primary text-zinc-950 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-zinc-950 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

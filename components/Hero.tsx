import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-[100svh] flex items-center justify-center overflow-hidden
        pt-20
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
          alt="Restaurant interior"
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-primary text-xs sm:text-sm md:text-lg uppercase tracking-[0.35em] mb-4 opacity-0 animate-fade-in-down">
          Exquisite Gastronomy
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 opacity-0 animate-fade-in delay-200">
          A Symphony of <span className="italic">Flavors</span>
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in delay-400">
          Experience a culinary journey where traditional techniques meet modern
          innovation in the heart of the city.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up delay-600">
          <a
            href="#reservation"
            className="px-8 py-4 bg-primary text-zinc-950 font-semibold uppercase tracking-widest hover:bg-white transition-transform duration-300 hover:-translate-y-1"
          >
            Book a Table
          </a>

          <a
            href="#menu"
            className="px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-widest hover:bg-white hover:text-zinc-950 transition-transform duration-300 hover:-translate-y-1"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-14 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

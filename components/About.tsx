import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-start">
            {/* Main Image */}
            <div className="aspect-[4/5] w-full max-w-sm md:max-w-none relative z-10 overflow-hidden shadow-2xl rounded-md">
              <img
                src="https://i.pinimg.com/736x/9c/e0/dd/9ce0dd9f363428b5a9911637cee3b94b.jpg"
                alt="Chef at work"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Image (Desktop Only) */}
            <div className="absolute -bottom-6 -right-6 w-48 h-64 z-20 overflow-hidden border-8 border-white dark:border-zinc-900 hidden lg:block rounded-md">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400"
                alt="Dining area"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 -z-10 rounded-full blur-3xl hidden md:block" />
          </div>

          {/* CONTENT SECTION */}
          <div className="text-center md:text-left">
            <span className="text-primary font-bold uppercase tracking-[0.25em] block mb-4 text-sm">
              Our Story
            </span>

            <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">
              Crafting Memorable <br />
              <span className="italic text-primary">Dining Experiences</span> since 1998
            </h2>

            <p className="text-gray-600 dark:text-zinc-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Founded on the principles of sustainability and artisanal excellence,
              L'Art Culinaire brings the finest local ingredients to your table.
              Our award-winning team redefines modern French-Asian fusion with every plate.
            </p>

            <p className="text-gray-600 dark:text-zinc-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              We believe that dining is more than just a meal; it's an art form.
              Every detail, from the ambient lighting to the curated wine list,
              is designed to transport you to a world of sensory delight.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-sm mx-auto md:mx-0">
              <div>
                <h4 className="text-2xl md:text-3xl font-serif text-primary mb-1">
                  25+
                </h4>
                <p className="text-xs uppercase tracking-widest font-medium opacity-60">
                  Years Excellence
                </p>
              </div>

              <div>
                <h4 className="text-2xl md:text-3xl font-serif text-primary mb-1">
                  3
                </h4>
                <p className="text-xs uppercase tracking-widest font-medium opacity-60">
                  Michelin Stars
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550966842-284d663312ce?auto=format&fit=crop&q=80&w=800" 
                alt="Chef at work" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-80 z-20 overflow-hidden border-8 border-white dark:border-zinc-900 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400" 
                alt="Dining area" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 -z-0 rounded-full blur-3xl" />
          </div>

          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] block mb-4">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Crafting Memorable <br /> 
              <span className="italic text-primary">Dining Experiences</span> since 1998
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
              Founded on the principles of sustainability and artisanal excellence, L'Art Culinaire brings the finest local ingredients to your table. Our award-winning team, led by Executive Chef Marcus Thorne, redefines modern French-Asian fusion with every plate.
            </p>
            <p className="text-gray-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
              We believe that dining is more than just a meal; it's an art form. Every detail, from the ambient lighting to the curated wine list, is designed to transport you to a world of sensory delight.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-primary mb-2">25+</h4>
                <p className="text-sm uppercase tracking-widest font-medium opacity-60">Years Excellence</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-2">3</h4>
                <p className="text-sm uppercase tracking-widest font-medium opacity-60">Michelin Stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

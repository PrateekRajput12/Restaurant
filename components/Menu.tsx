
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

const categories: Category[] = ['Starters', 'Main Course', 'Desserts', 'Drinks'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-gray-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] block mb-4">Gastronomy</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Our Seasonal Menu</h2>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-8 py-2 rounded-full border text-sm font-bold uppercase tracking-widest transition-all ${activeCategory === 'All'
                ? 'bg-primary border-primary text-zinc-950 shadow-lg scale-105'
                : 'border-gray-300 dark:border-zinc-700 hover:border-primary'
                }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full border text-sm font-bold uppercase tracking-widest transition-all ${activeCategory === cat
                  ? 'bg-primary border-primary text-zinc-950 shadow-lg scale-105'
                  : 'border-gray-300 dark:border-zinc-700 hover:border-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-zinc-900 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 rounded-lg flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.isChefSpecial && (
                  <div className="absolute top-4 right-4 bg-primary text-zinc-950 text-[10px] font-bold uppercase py-1 px-3 rounded-full">
                    Chef's Choice
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif italic text-xl">$ {item.price}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-primary font-bold">${item.price}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

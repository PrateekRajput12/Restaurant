import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

const categories: Category[] = ['Starters', 'Main Course', 'Desserts', 'Drinks'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems =
    activeCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-zinc-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.25em] block mb-3">
            Gastronomy
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-8">
            Our Seasonal Menu
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as Category | 'All')}
                className={`
                  px-4 sm:px-6 py-2 rounded-full border text-xs sm:text-sm
                  font-semibold uppercase tracking-widest transition-all
                  ${activeCategory === cat
                    ? 'bg-primary border-primary text-zinc-950 shadow-md'
                    : 'border-gray-300 dark:border-zinc-700 hover:border-primary'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="
                bg-white dark:bg-zinc-900 rounded-xl overflow-hidden
                shadow-lg hover:shadow-2xl transition-shadow duration-300
                flex flex-col h-full
              "
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {item.isChefSpecial && (
                  <span className="absolute top-3 right-3 bg-primary text-zinc-950 text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    Chef’s Choice
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-serif font-bold">
                    {item.name}
                  </h3>
                  <span className="text-primary font-bold text-sm sm:text-base">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-100 dark:border-zinc-800">
                  <span className="text-[10px] uppercase tracking-widest font-semibold opacity-50">
                    {item.category}
                  </span>
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

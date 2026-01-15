import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14 md:mb-16">
          
          {/* BRAND + NEWSLETTER */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 tracking-tighter">
              L&apos;ART CULINAIRE
            </h2>

            <p className="text-zinc-400 max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed text-sm md:text-base">
              Elevating the culinary landscape through passion, innovation, and an unwavering commitment to excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Join our Newsletter"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <button className="w-full sm:w-auto bg-primary text-zinc-950 font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          {/* WORKING HOURS */}
          <div className="text-center sm:text-left">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 md:mb-6">
              Working Hours
            </h4>
            <ul className="text-zinc-400 space-y-3 text-sm">
              <li className="flex justify-between max-w-xs mx-auto sm:mx-0">
                <span>Mon - Thu</span>
                <span>6 PM - 11 PM</span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto sm:mx-0">
                <span>Fri - Sat</span>
                <span>5 PM - 12 AM</span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto sm:mx-0">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 md:mb-6">
              Quick Links
            </h4>
            <ul className="text-zinc-400 space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Private Events
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  Tasting Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 md:pt-10 border-t border-zinc-900 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-xs md:text-sm text-zinc-500 text-center md:text-left">
          <p>© 2024 L&apos;Art Culinaire. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

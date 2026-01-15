
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 tracking-tighter">L'ART CULINAIRE</h2>
            <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
              Elevating the culinary landscape through passion, innovation, and an unwavering commitment to excellence. Join our refined community.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Join our Newsletter"
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary grow"
              />
              <button className="bg-primary text-zinc-950 font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Working Hours</h4>
            <ul className="text-zinc-400 space-y-3">
              <li className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>6 PM - 11 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>5 PM - 12 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="text-zinc-400 space-y-3">
              <li><a href="#about" className="hover:text-primary transition-colors">Private Events</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Tasting Menu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>© 2024 L'Art Culinaire. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

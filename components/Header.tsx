import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Sun, Moon } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur shadow-md'
            : 'bg-transparent'}
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary"
          >
            L&apos;ART CULINAIRE
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-zinc-900 dark:text-zinc-100"
            >
              {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-white dark:bg-zinc-950
          transition-transform duration-300
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="pt-20 px-6 flex flex-col gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

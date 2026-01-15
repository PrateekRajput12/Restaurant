import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (
        saved === 'dark' ||
        (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex flex-col gap-20">
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;

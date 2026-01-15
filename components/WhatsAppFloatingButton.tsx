import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloatingButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '8279522851'; // TODO: Replace with actual restaurant number
    const message = encodeURIComponent(
      "Hello L'Art Culinaire! I'd like to inquire about a reservation or today's specials."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={handleWhatsAppClick}
        aria-label="Contact us on WhatsApp"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0"></span>

        {/* WhatsApp Icon */}
        <MessageCircle size={32} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-zinc-800">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;

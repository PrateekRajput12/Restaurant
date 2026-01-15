import React, { useState } from 'react';
import { Sparkles, X, MessageSquare, Send, Loader2 } from 'lucide-react';
// import { getDishRecommendation } from '../../geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    {
      role: 'ai',
      text:
        "Bonjour! I'm your digital concierge. Tell me what flavors you enjoy, and I'll suggest the perfect dish.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const recommendation = await getDishRecommendation(userMsg);
      setMessages((prev) => [...prev, { role: 'ai', text: recommendation }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]">
      {isOpen ? (
        <div
          className="
            bg-white dark:bg-zinc-900
            w-[92vw] max-w-[380px]
            h-[70vh] max-h-[520px]
            rounded-2xl shadow-2xl
            flex flex-col overflow-hidden
            border border-gray-100 dark:border-zinc-800
            animate-in fade-in slide-in-from-bottom-4 duration-300
          "
        >
          {/* HEADER */}
          <div className="bg-primary px-4 py-4 flex items-center justify-between text-zinc-950">
            <div className="flex items-center gap-3">
              <Sparkles size={22} />
              <div>
                <h3 className="font-bold text-sm">Culinary Assistant</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-70">
                  Powered by Gemini AI
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:rotate-90 transition-transform"
            >
              <X size={20} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 px-4 py-3 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                    ${m.role === 'user'
                      ? 'bg-primary text-zinc-950 rounded-tr-none'
                      : 'bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 rounded-tl-none'
                    }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 className="animate-spin text-primary" size={16} />
                  <span className="text-xs italic opacity-60">
                    Chef is thinking...
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="p-3 bg-gray-50 dark:bg-zinc-900/50 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="I like seafood and truffles..."
                className="
                  flex-1 bg-white dark:bg-zinc-800
                  rounded-xl px-4 py-3 text-sm
                  border dark:border-zinc-700
                  focus:outline-none focus:ring-2 focus:ring-primary/50
                "
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="
                  bg-primary text-zinc-950
                  p-3 rounded-xl
                  hover:bg-zinc-950 hover:text-white
                  transition-all disabled:opacity-50
                "
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="
            bg-primary text-zinc-950
            w-14 h-14 sm:w-16 sm:h-16
            rounded-full flex items-center justify-center
            shadow-2xl hover:scale-110 transition-transform group
          "
        >
          <MessageSquare
            size={24}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;


import React, { useState } from 'react';
import { Sparkles, X, MessageSquare, Send, Loader2 } from 'lucide-react';
import { getDishRecommendation } from '../../geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Bonjour! I'm your digital concierge. Tell me what flavors you enjoy, and I'll suggest the perfect dish." }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const recommendation = await getDishRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: recommendation }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white dark:bg-zinc-900 w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-6 text-zinc-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={24} />
              <div>
                <h3 className="font-bold">Culinary Assistant</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow p-6 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${m.role === 'user'
                  ? 'bg-primary text-zinc-950 rounded-tr-none'
                  : 'bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 className="animate-spin text-primary" size={16} />
                  <span className="text-xs italic opacity-60">Chef is thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-gray-50 dark:bg-zinc-900/50 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="I like seafood and truffles..."
                className="bg-white dark:bg-zinc-800 grow rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-zinc-700 border"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-zinc-950 p-3 rounded-xl hover:bg-zinc-950 hover:text-white transition-all disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-zinc-950 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;

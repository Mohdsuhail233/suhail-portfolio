
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';
import { chatWithAssistant } from '../services/geminiService';
import { Message } from '../types';
import { MessageCircle } from "lucide-react";

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Mohd Suhail's AI assistant. Ask me anything about his skills, experience, or availability!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const assistantResponse = await chatWithAssistant([...messages, userMessage]);
    setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-blue-600/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">Mohd suhail Assistant</p>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/5 text-gray-300'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 rounded-2xl px-4 py-3 text-sm flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex space-x-2">
            <input 
              type="text"
              placeholder="Ask about Mohd Suhail..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <div className="absolute -top-12 -left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold px-3 py-2 rounded-xl whitespace-nowrap shadow-xl">
            Ask my AI Assistant!
          </div>
          <Bot size={28} />
        </button>
      )}
    </div>
  );
};

export default AIChat;

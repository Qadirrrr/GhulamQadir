import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { INFO } from '../constants';
import Logo from '../assets/Logo.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      content: `Hi! I'm Ghulam Qadir's AI assistant. I know everything about his work, skills, and projects. How can I help you today?` 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('skill') || q.includes('technology') || q.includes('tech')) {
      return `Ghulam is proficient in: ${INFO.skills.map(s => s.name).join(', ')}. He specializes in MERN stack development, AI research, and mobile solutions.`;
    }
    if (q.includes('project') || q.includes('work')) {
      return `Ghulam has built several high-end projects, including: ${INFO.projects.map(p => p.title).join(', ')}. The most recent one is the MERN Stack Restaurant Ecosystem. Would you like details on a specific one?`;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return `You can reach Ghulam via email at ${INFO.contact.email} or by phone at ${INFO.contact.phone}. He is also active on LinkedIn and GitHub.`;
    }
    if (q.includes('experience') || q.includes('job') || q.includes('intern')) {
      const exp = INFO.experience[0];
      return `Ghulam worked as a ${exp.role} at ${exp.company} (${exp.date}), where he contributed to responsive web apps and backend integration.`;
    }
    if (q.includes('education') || q.includes('degree') || q.includes('university')) {
      const edu = INFO.education[0];
      return `He is currently pursuing a ${edu.degree} at the ${edu.institution}, with an expected graduation in 2025.`;
    }
    if (q.includes('who') || q.includes('about') || q.includes('ghulam')) {
      return INFO.summary;
    }
    if (q.includes('resume') || q.includes('cv')) {
        return "You can find his resume in the footer section of this portfolio for download!";
    }
    
    return "That's an interesting question! I'm specifically trained on Ghulam's portfolio data. You can ask about his skills, projects, experience, or how to contact him.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { role: 'bot', content: generateResponse(input) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileActive={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-2xl amethyst-gradient flex items-center justify-center shadow-luxury border border-white/20 text-white"
        id="chatbot-toggle"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
            className="fixed bottom-24 right-6 z-[9999] w-[90vw] sm:w-[400px] h-[550px] bg-[#030014]/90 backdrop-blur-2xl border border-white/10 rounded-[30px] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 amethyst-gradient flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img src={Logo} alt="Logo" className="w-full h-full object-contain filter brightness-125 drop-shadow-md" />
                </div>
                <div>
                  <h3 className="text-white font-black text-sm uppercase tracking-widest">Ghulam Qadir</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-white/70 font-bold uppercase tracking-tighter">Software Developer</span>
                  </div>
                </div>
              </div>
              <Sparkles size={18} className="text-white/50" />
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth custom-scrollbar"
            >
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-luxury text-white rounded-tr-none font-medium' 
                      : 'bg-white/5 border border-white/10 text-secondary rounded-tl-none font-medium'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-luxury rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1 h-1 bg-luxury rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1 h-1 bg-luxury rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything about Ghulam..."
                  className="w-full bg-tertiary/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-luxury/50 transition-all pr-12"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 p-2 rounded-lg bg-luxury text-white hover:scale-105 active:scale-95 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-center text-[9px] text-white/20 mt-3 font-bold uppercase tracking-[0.2em]">
                Portfolio AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

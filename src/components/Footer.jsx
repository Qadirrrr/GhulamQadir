import React from "react";
import { motion } from "framer-motion";
import { INFO } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-luxury/20 blur-xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-white font-black text-3xl tracking-tighter mb-4 luxury-text-gradient">
            {INFO.name}
          </h2>
          <div className="flex gap-8">
            {Object.entries(INFO.contact).map(([platform, link]) => {
                if (platform === 'email' || platform === 'phone') return null;
                return (
                  <a 
                    key={platform}
                    href={link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-secondary hover:text-luxury transition-colors duration-300 font-bold uppercase text-[12px] tracking-[0.2em]"
                  >
                    {platform}
                  </a>
                )
            })}
          </div>
        </motion.div>

        <div className="w-full h-[1px] bg-white/5 mb-8" />

        <div className="flex justify-center items-center w-full">
           <p className="text-secondary text-sm font-medium opacity-60 text-center">
             © 2026. {INFO.name}
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INFO } from "../../constants";

const techDetails = {
  Python: "Used extensively for AI, machine learning models, and complex backend algorithms.",
  JavaScript: "The core language used for MERN stack web development and dynamic UI logic.",
  React: "Primary library for architecting interactive, responsive, high-end frontend architectures.",
  "Node.js": "Leveraged for building highly scalable server-side systems and efficient RESTful APIs.",
  MongoDB: "NoSQL database utilized for flexible, rapid, and document-based data storage.",
  Flutter: "Framework of choice for compiling stunning native cross-platform mobile applications.",
  Firebase: "Used for seamless authentication, secure real-time databases, and agile backend deployment.",
  SQL: "Employed for structured data querying, robust schema design, and relational database management.",
  Java: "Utilized for stable enterprise-grade applications and strict object-oriented architectures.",
};

const Tech = () => {
  const [activeTech, setActiveTech] = useState(INFO.skills[0]);

  const getIconUrl = (name) => {
    const icons = {
      python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    };
    return icons[name] || "";
  };

  return (
    <section id="tech" className="max-w-7xl mx-auto px-6 sm:px-16 py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-luxury/5 blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 z-10 relative"
      >
        <p className="text-secondary text-[18px] uppercase tracking-[0.2em] font-bold opacity-50">Core Arsenal</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] tracking-tighter drop-shadow-2xl">Technologies.</h2>
      </motion.div>
      
      <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto z-10 relative mt-10'>
        
        {/* Left: Interactive Grid */}
        <div className="flex-1 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4 sm:gap-6">
          {INFO.skills.map((technology, index) => {
            const isActive = activeTech.name === technology.name;
            return (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="relative group p-2"
                onMouseEnter={() => setActiveTech(technology)}
              >
                {/* Reactive Skill Container */}
                <div 
                  className={`relative z-10 w-full h-full flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/5 border ${
                    isActive ? "border-luxury shadow-luxury" : "border-white/10"
                  } backdrop-blur-md transition-all duration-300 hover:border-luxury/50`}
                >
                  <img
                    src={getIconUrl(technology.icon)}
                    alt={technology.name}
                    className="w-10 h-10 sm:w-14 sm:h-14 object-contain contrast-[1.1] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="text-white text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-center">
                    {technology.name}
                  </p>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-luxury/10 blur-xl rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Detailed View */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative p-10 rounded-3xl bg-tertiary/40 border border-white/10 backdrop-blur-lg overflow-hidden group min-h-[300px] flex flex-col justify-center"
            >
              {/* Decorative inner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-luxury/20 blur-[80px] pointer-events-none rounded-full transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
              
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className="w-20 h-20 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-luxury">
                   <img src={getIconUrl(activeTech.icon)} alt={activeTech.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-white text-3xl sm:text-4xl font-black tracking-tight">{activeTech.name}</h3>
                  <div className="h-1 w-12 bg-luxury mt-2 rounded-full" />
                </div>
              </div>
              
              <p className="text-secondary text-lg sm:text-xl leading-relaxed font-medium relative z-10">
                {techDetails[activeTech.name] || "Expertly utilized to build dynamic, efficient, and highly scalable solutions."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
};

export default Tech;

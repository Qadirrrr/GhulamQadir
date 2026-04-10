import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Tech from "./components/sections/Tech";
import Works from "./components/sections/Works";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import StarsCanvas from "./components/canvas/Stars";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import { useScroll, motion, useSpring } from "framer-motion";
import { INFO } from "./constants";

const ScrollingDivider = () => {
  const techString = INFO.skills.map(skill => skill.name).join("  •  ") + "  •  ";
  
  return (
    <div className="w-full py-20 overflow-hidden bg-primary/20 relative z-10 border-y border-white/5">
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="whitespace-nowrap flex text-[6vw] font-bold uppercase tracking-[0.2em] text-white opacity-[0.2]"
      >
        <span className="pr-10">{techString}</span>
        <span className="pr-10">{techString}</span>
      </motion.div>
    </div>
  );
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='relative z-0 bg-primary min-h-screen'>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#915eff] to-[#2dd4bf] origin-left z-[10000]"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      
      <div className="relative z-0">
        <About />
        <Experience />
        <Tech />
        <ScrollingDivider />
        <Works />
        <Education />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
};

export default App;

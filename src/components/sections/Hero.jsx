import React from "react";
import { motion } from "framer-motion";
import { INFO } from "../../constants";
import ProfileImage from "../../assets/Image.png";

const TypewriterEffect = () => {
  const [text, setText] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [speed, setSpeed] = React.useState(150);

  React.useEffect(() => {
    const handleTyping = () => {
      const currentRole = INFO.roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % INFO.roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <div className='h-8 sm:h-12 flex items-center justify-center lg:justify-start'>
      <span className='text-luxury font-black text-lg sm:text-xl lg:text-2xl uppercase tracking-[0.2em] sm:tracking-[0.4em] drop-shadow-luxury'>
        {text}
      </span>
      <span className='w-1 h-8 bg-luxury ml-2 animate-pulse rounded-full shadow-luxury' />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto bg-[#030014] overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#915EFF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col items-center justify-center min-h-screen lg:flex-row lg:items-center lg:justify-between pt-28 pb-10 lg:py-0 relative z-10 w-full">
        
        {/* Textual Overlay: Stays Front/Top on Mobile, Left on Desktop */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start select-none"
          >
            <h1 className="text-white font-black lg:text-[65px] md:text-[55px] sm:text-[45px] xs:text-[38px] text-[32px] leading-[1] tracking-tighter drop-shadow-[0_25px_50px_rgba(0,0,0,1)] pointer-events-auto">
              I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#915EFF] to-[#2dd4bf] animate-shimmer relative uppercase tracking-tighter">
                 {INFO.name}
                 <div className="absolute -bottom-4 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-luxury/40 to-transparent blur-md" />
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-4 pointer-events-auto">
              <TypewriterEffect />
            </div>

            <motion.div 
               className="mt-12 flex flex-row flex-wrap gap-6 justify-center lg:justify-start pointer-events-auto"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.8 }}
            >
               <a href="#work" className="amethyst-gradient px-8 sm:px-12 py-4 rounded-xl text-white font-black shadow-luxury hover:scale-105 transition-all text-sm uppercase tracking-widest border border-white/20 active:scale-95 leading-none">
                  View Work
               </a>
               <a href="#contact" className="px-8 sm:px-12 py-4 rounded-xl text-white font-black glass-card hover:bg-white/10 transition-all text-sm uppercase tracking-widest border border-white/10 active:scale-95 leading-none">
                 Contact Me
               </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Parent visual container for the Image */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
           className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-0 pointer-events-none"
        >
          <img 
             src={ProfileImage} 
             alt="Profile" 
             className="max-w-[90%] lg:max-w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]" 
             style={{ maxHeight: '80vh' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

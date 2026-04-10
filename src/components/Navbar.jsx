import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { INFO } from "../constants";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "tech", title: "Skills" },
    { id: "work", title: "Projects" },
    { id: "education", title: "Education" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-primary/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      } px-6 sm:px-16`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div
          className='flex items-center cursor-pointer group'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
             src={logo} 
             alt="Logo" 
             className="h-16 sm:h-24 w-auto object-contain -my-8 sm:-my-10 transition-all duration-300 group-hover:scale-105 filter brightness-110 contrast-110" 
          />
        </div>

        <ul className='list-none hidden md:flex flex-row gap-8 lg:gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-luxury text-[14px] font-black uppercase tracking-widest cursor-pointer transition-all duration-300 relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-luxury transition-all duration-300 ${active === link.title ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </li>
          ))}
        </ul>

        {/* Mobile Toggle & Menu */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <div 
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-luxury/20 hover:border-luxury/40 transition-all active:scale-95"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X className="text-white w-5 h-5" /> : <Menu className="text-white w-5 h-5" />}
          </div>

          <AnimatePresence>
            {toggle && (
               <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className='fixed p-8 bg-[#030014]/90 backdrop-blur-2xl top-20 right-0 w-[80%] h-screen min-w-[300px] z-40 border-l border-white/10'
               >
                <div className="flex flex-col gap-8 mt-4">
                  {navLinks.map((link) => (
                    <motion.div 
                      key={link.id}
                      whileHover={{ x: 10 }}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-black uppercase tracking-[0.3em] text-[20px] cursor-pointer`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`} className="block w-full">{link.title}</a>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Menu Footer Branding */}
                <div className="absolute bottom-32 left-8 border-l border-luxury pl-4">
                   <p className="text-white text-sm font-black uppercase tracking-widest opacity-40">Portfolio</p>
                   <p className="text-luxury text-[10px] font-bold tracking-[0.4em] uppercase mt-1">{INFO.name}</p>
                </div>
               </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

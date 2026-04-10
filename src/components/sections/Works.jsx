import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INFO } from "../../constants";

const ProjectCard = ({ id, title, description, tech, source_code_link, index, active, handleClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[450px] sm:h-[600px] cursor-pointer transition-[flex] duration-[0.7s] ease-out-flex overflow-hidden rounded-[24px] group bg-tertiary border border-white/5 shadow-2xl`}
      onClick={() => handleClick(id)}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 w-full h-full amethyst-gradient opacity-[0.14] group-hover:opacity-20 transition-opacity`} />
      <div className="absolute inset-0 bg-tertiary/40 backdrop-blur-[2px]" />
      
      {active !== id ? (
        <h3 className="font-black text-white text-[12px] sm:text-[14px] lg:text-[16px] uppercase tracking-[0.2em] sm:tracking-[0.3em] lg:-rotate-90 absolute z-10 opacity-80 group-hover:opacity-100 transition-all text-center lg:whitespace-nowrap drop-shadow-md px-6">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.85)] backdrop-blur-md rounded-t-[24px] animate-slide-up">
          <div className="flex gap-3 mb-4">
            {tech && tech.map((tag) => (
              <span key={`${title}-${tag}`} className={`text-[12px] font-black uppercase tracking-widest ${tag.toLowerCase() === 'react' ? 'text-[#61DAFB]' : 'text-luxury'}`}>
                #{tag}
              </span>
            ))}
          </div>
          <h2 className="text-white font-black text-[22px] sm:text-[28px] tracking-tighter leading-none mb-4">{title}</h2>
          <p className="text-secondary text-[14px] sm:text-[16px] leading-[24px] font-medium opacity-90">{description}</p>
          
          <div className="mt-8 flex gap-6">
             <a 
                href={source_code_link} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer hover:bg-luxury/20 transition-all shadow-luxury"
                onClick={(e) => e.stopPropagation()}
             >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
             </a>
             <a 
                href={source_code_link} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-luxury border border-white/20 flex items-center justify-center cursor-pointer hover:shadow-luxury transition-all"
                onClick={(e) => e.stopPropagation()}
             >
                <svg className="w-6 h-6 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
             </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Works = () => {
  const [active, setActive] = useState("project-0");

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-16 py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-secondary text-[18px] uppercase tracking-[0.2em] font-bold opacity-50">Impact Artifacts</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] tracking-tighter">Projects.</h2>
      </motion.div>

      <div className='mt-20 flex lg:flex-row flex-col gap-6 min-h-[600px]'>
        {INFO.projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            id={`project-${index}`}
            index={index}
            {...project}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;

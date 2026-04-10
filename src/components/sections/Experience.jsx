import React from "react";
import { motion } from "framer-motion";
import { INFO } from "../../constants";

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className="relative pb-16 pl-12 border-l-2 border-luxury/20 group hover:border-luxury/60 transition-colors duration-500 last:border-0 last:pb-0">
      {/* High-end glowing dot */}
      <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-luxury shadow-luxury group-hover:scale-125 transition-transform duration-300" />
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-tertiary/60 border border-white/5 backdrop-blur-md p-6 sm:p-10 rounded-3xl relative overflow-hidden group/card hover:border-luxury/30 transition-all duration-500 shadow-xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
        
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
          <div>
            <h3 className="text-white text-[28px] font-black tracking-tighter group-hover/card:text-luxury transition-colors duration-300">{experience.role}</h3>
            <p className="luxury-text-gradient text-[20px] font-bold mt-1">
              {experience.company}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            <p className="text-secondary font-black text-[12px] uppercase tracking-[0.2em]">{experience.date}</p>
          </div>
        </div>

        <ul className='mt-5 space-y-4'>
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className='text-secondary text-[16px] pl-2 tracking-wide leading-[26px] flex items-start gap-4 font-medium'
            >
              <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-luxury shadow-luxury flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-16 py-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-luxury/5 blur-[150px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-secondary text-[18px] uppercase tracking-[0.2em] font-bold opacity-50">Proven Trajectory</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] tracking-tighter">Experience.</h2>
      </motion.div>

      <div className='mt-24 flex flex-col max-w-5xl mx-auto'>
        {INFO.experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

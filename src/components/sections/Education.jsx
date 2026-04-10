import React from "react";
import { motion } from "framer-motion";
import { INFO } from "../../constants";

const Education = () => {

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 sm:px-16 py-24 relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-luxury opacity-[0.05] blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-secondary text-[18px] uppercase tracking-widest font-bold opacity-50">Discovery</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight">Education.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col gap-12'>
        {INFO.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-tertiary/60 border border-white/5 backdrop-blur-md p-10 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:border-luxury/30 transition-all duration-500 shadow-xl"
          >
            <div className="flex-1">
              <span className="text-luxury font-bold text-sm tracking-[0.2em] uppercase mb-2 block">{edu.date}</span>
              <h3 className="text-white text-[28px] font-extrabold tracking-tight group-hover:text-luxury transition-colors duration-300">{edu.institution}</h3>
              <p className="luxury-text-gradient text-[20px] font-semibold mt-2">{edu.degree}</p>
              {edu.gpa && (
                <div className="flex items-center gap-4 mt-4">
                   <div className="h-[1px] w-8 bg-luxury opacity-30" />
                   <p className="text-secondary font-bold text-sm tracking-wider">CGPA: <span className="text-white bg-white/5 px-4 py-1.5 rounded-full border border-white/10 ml-2">{edu.gpa}</span></p>
                </div>
              )}
            </div>
             <div className="flex flex-col items-start md:items-end">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-luxury/20 group-hover:border-luxury/40 transition-all duration-300 p-2">
                   {edu.logo ? (
                     <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain filter brightness-110 contrast-110" />
                   ) : (
                     <span className="text-white font-black text-xl italic leading-none">{edu.institution.charAt(0)}</span>
                   )}
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-24 p-12 bg-tertiary/60 border border-white/5 backdrop-blur-md rounded-3xl relative overflow-hidden group shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury opacity-[0.1] blur-3xl animate-pulse" />
        
        <h3 className="text-white text-[26px] font-black mb-10 flex items-center gap-5">
          <div className="w-2.5 h-10 bg-luxury rounded-full shadow-luxury" />
          Professional Certifications
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {INFO.certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              whileHover={{ x: 10 }}
              className="flex flex-col gap-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-luxury/20 transition-all duration-300"
            >
                <div className="flex justify-between items-start mb-2">
                   <p className="text-white font-extrabold text-xl group-hover:text-luxury transition-colors">{cert.name}</p>
                   <span className="text-[11px] font-black text-luxury bg-luxury/10 px-3 py-1 rounded-full uppercase tracking-widest">{cert.date}</span>
                </div>
                <p className="text-secondary font-bold text-sm italic">{cert.issuer}</p>
                {cert.id && (
                  <p className="text-secondary/40 text-[10px] font-mono mt-2 tracking-widest uppercase">ID: {cert.id}</p>
                )}
                
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

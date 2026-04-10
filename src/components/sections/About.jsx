import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Smartphone } from "lucide-react";

const SkillCard = ({ index, title, description, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-tertiary/60 border border-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl group hover:border-luxury/30 transition-all duration-500 shadow-xl w-full flex flex-col min-h-[300px]"
  >
    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-luxury/20 group-hover:border-luxury/40 transition-all duration-300 mb-8">
       <Icon className="w-8 h-8 text-luxury shadow-luxury" />
    </div>

    <h3 className="text-white text-[28px] font-black tracking-tighter group-hover:text-luxury transition-colors duration-300 uppercase leading-none mb-6">
      {title}
    </h3>

    <p className="text-secondary text-[16px] tracking-wide leading-[26px] font-medium opacity-80">
      {description}
    </p>
  </motion.div>
);

const About = () => {
  const softwareDeveloperSkills = [
    {
      title: "Web Development",
      description: "Developing modern, responsive web systems using the latest frontend technologies.",
      icon: Code2
    },
    {
      title: "UI/UX Design",
      description: "Designing sleek, professional user interfaces that look great on every device screen.",
      icon: Globe
    },
    {
      title: "Backend",
      description: "Building fast, secure servers and databases for high-performance software systems.",
      icon: Database
    },
    {
      title: "Mobile Applications",
      description: "Creating native mobile apps that run smoothly on Android and iOS systems flawlessly.",
      icon: Smartphone
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-16 py-32 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-luxury/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row gap-20 items-start justify-between mb-24">
        <div className="flex-[1.5]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-luxury text-[18px] uppercase tracking-[0.4em] font-black italic mb-2">The Mission</p>
            <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[34px] text-[30px] tracking-tighter leading-none italic uppercase">Software Architect.</h2>
            <div className="h-1.5 w-24 bg-luxury mt-6 rounded-full shadow-luxury opacity-40 ml-1" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-10 text-secondary text-[18px] leading-[36px] max-w-4xl font-medium border-l-4 border-luxury/40 pl-10'
          >
            I am a high-end Software Architect focused on building the next generation of scalable digital products. 
            By merging advanced engineering with creative innovation, I specialize in solving complex industrial problems 
            and delivering seamless user experiences across web and mobile platforms. 
            My methodology ensures that every line of code adds architectural value and aesthetic perfection.
          </motion.p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
        {softwareDeveloperSkills.map((skill, index) => (
          <SkillCard 
            key={skill.title} 
            index={index} 
            {...skill}
          />
        ))}
      </div>
    </section>
  );
};

export default About;

import aihub from "./assets/AIHub.png";
import restaurant from "./assets/Restaurant.png";
import resume from "./assets/Qadir.pdf";
import uwLogo from "./assets/UW.png";
import fgLogo from "./assets/FG.png";
import fyp from "./assets/FYP.png";
import movie from "./assets/Movie.png";

export const INFO = {
  name: "Ghulam Qadir",
  roles: ["MERN Stack Developer", "Mobile Solutions", "AI Applications", "UI/UX Designer"],
  location: "Wah Cantt, Rawalpindi, Pakistan",
  contact: {
    phone: "0314-5022716",
    email: "gq5735741@gmail.com",
    linkedin: "https://www.linkedin.com/in/ghulam-qadirr/",
    github: "https://github.com/Qadirrrr",
    resume: resume
  },
  summary: "Dedicated Software Developer with hands-on experience in designing, developing, and deploying scalable web and AI-powered applications. Skilled in MERN stack development, modern frameworks, and cloud-based services. Adept at writing clean, maintainable code and building user-focused solutions with emphasis on performance, security, and reliability.",
  skills: [
    { name: "Python", icon: "python" },
    { name: "Java", icon: "java" },
    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "node" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Flutter", icon: "flutter" },
    { name: "Firebase", icon: "firebase" },
    { name: "SQL", icon: "sql" }
  ],
  experience: [
    {
      company: "Wah Industries Limited",
      role: "Web Development Intern",
      date: "Jul 2024 - Oct 2024",
      points: [
        "Contributed to development and maintenance of responsive web applications.",
        "Assisted with backend integration and dynamic data handling to improve application functionality.",
        "Applied Git and GitHub for version control and collaborative development.",
        "Performed testing, debugging, and optimization to enhance cross-browser compatibility."
      ]
    }
  ],
  projects: [
    {
      title: "AIHub – Full-Stack AI Productivity Suite",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini AI"],
      date: "May 2026",
      description: "A modern, high-performance web application that centralizes multiple AI-driven tools into a single platform. Built with React and Tailwind CSS, it leverages the Gemini AI SDK to provide services like automated content writing, code generation, and data analysis. Features a robust Node.js/Express backend with MongoDB for secure user data management and seamless scalability.",
      source_code_link: "https://github.com/Qadirrrr/AIHub",
      live_link: "https://aihub-frontend-nine.vercel.app/",
      image: aihub
    },
    {
      title: "MERN Stack Restaurant Ecosystem",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      date: "Mar 2026",
      description: "A complete MERN stack solution for restaurant management. Features interactive customer ordering, a real-time admin dashboard for order status tracking, and automated contact query handling.",
      source_code_link: "https://github.com/Qadirrrr/Restaurant",
      live_link: "https://restaurant-rho-ivory.vercel.app/",
      image: restaurant
    },
    {
      title: "Vision X - Intelligent Surveillance",
      tech: ["Python", "YOLOv8", "PyQt", "Flutter", "Firebase"],
      date: "Jun 2025",
      description: "Developed a real-time surveillance system for intrusion detection and automated alerts. Implemented YOLOv8-based vehicle tracking and monitoring for intelligent analysis.",
      source_code_link: "https://github.com/Qadirrrr",
      live_link: "https://www.linkedin.com/feed/update/urn:li:activity:7364534996021202944/",
      image: fyp
    },
    {
      title: "AI-Based Movie Recommendation System",
      tech: ["Python", "Scikit-learn", "Pandas"],
      date: "Oct 2024",
      description: "Built a recommendation engine using collaborative and content-based filtering techniques. Processed datasets and trained machine learning models.",
      source_code_link: "https://github.com/Qadirrrr/MoviePoster-recommendation-system",
      image: movie
    }
  ],
  education: [
    {
      institution: "University of Wah",
      degree: "Bachelor of Science in Computer Science",
      date: "Sep 2021 - May 2025",
      gpa: "2.98/4.00",
      logo: uwLogo
    },
    {
      institution: "FG Degree College For Men Wah Cantt",
      degree: "FSc - Computer Science",
      date: "Mar 2019 - Aug 2021",
      gpa: "",
      logo: fgLogo
    }
  ],
  certifications: [
    {
      name: "Generative AI Application Developer Certificate",
      issuer: "UETIANS Lahore Endowment Foundation, USA",
      date: "Dec 20th, 2025",
      id: "07a4e415e27f3a06"
    }
  ]
};

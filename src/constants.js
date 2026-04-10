import restaurant from "./assets/Restaurant.png";
import resume from "./assets/Qadir.pdf";
import uwLogo from "./assets/UW.png";
import fgLogo from "./assets/FG.png";

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
      title: "MERN Stack Restaurant Ecosystem",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      date: "Mar 2026",
      description: "A complete MERN stack solution for restaurant management. Features interactive customer ordering, a real-time admin dashboard for order status tracking, and automated contact query handling.",
      source_code_link: "https://github.com/Qadirrrr/Restaurant"
    },
    {
      title: "Vision X - Intelligent Surveillance",
      tech: ["Python", "YOLOv8", "PyQt", "Flutter", "Firebase"],
      date: "Jun 2025",
      description: "Developed a real-time surveillance system for intrusion detection and automated alerts. Implemented YOLOv8-based vehicle tracking and monitoring for intelligent analysis.",
      source_code_link: "https://github.com/Qadirrrr"
    },
    {
      title: "Customizable eCommerce Application",
      tech: ["Flutter", "Firebase"],
      date: "Nov 2024",
      description: "Designed and developed a customizable eCommerce application with real-time product previews. Integrated secure authentication and order management using Firebase services.",
      source_code_link: "https://github.com/Qadirrrr"
    },
    {
      title: "AI-Based Movie Recommendation System",
      tech: ["Python", "Scikit-learn", "Pandas"],
      date: "Oct 2024",
      description: "Built a recommendation engine using collaborative and content-based filtering techniques. Processed datasets and trained machine learning models.",
      source_code_link: "https://github.com/Qadirrrr/MoviePoster-recommendation-system"
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

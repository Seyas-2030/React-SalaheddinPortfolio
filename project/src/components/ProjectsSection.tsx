import React from 'react';
import image1 from '../assets/ai-youtube-short-video-generator.png';
import image2 from '../assets/chat-app.jpeg';
import image3 from '../assets/The_stars_cafe.jpg';
import image4 from '../assets/gulf-master-auto-repair.png';
import image5 from '../assets/qatar-cctv-calculator.png';
import image6 from '../assets/smart-productivity.png';
import image7 from '../assets/zu-schedule-system.png';
import image8 from '../assets/react-workout-app.png';
import image9 from '../assets/text-to-voice.png';
import image10 from '../assets/portfolio-preview.svg';
const image11 = 'https://raw.githubusercontent.com/Seyas-2030/NiceCoffeeStore/main/src/NiceCoffee/wwwroot/img/SAC.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Youtube Short Video Generator",
      description: "AI YouTube Shorts Video Generator An AI-powered tool that automatically creates short YouTube videos from simple text inputs. It generates scripts, converts them to natural-sounding voiceovers, adds relevant images or video clips, and produces a ready-to-publish short video.",
      image: image1,
      technologies: ["React.js", "Next.js", "Convex database", "Inngest"],
      githubUrl: "https://github.com/Seyas-2030/Full-Stack-AI-Video-Short-Generator"
    },
    {
      id: 2,
      title: "Chat app",
      description: "Real-Time Chat Application A full-stack chat application built with the MERN stack, enabling real-time messaging between users. Features include user authentication, private and group chats, message timestamps, and responsive design for web and mobile devices. Tech Stack: MongoDB, Express.js, React.js, Node.js, Socket.io.",
      image: image2,
      technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
      githubUrl: "https://github.com/Seyas-2030/Full-Stack-mern-chat-app"
    },
    {
      id: 3,
      title: "The stars cafe",
      description: "The Stars Cafe A responsive website for The Stars Cafe showcasing the menu, promotions, and contact information. The site features smooth navigation, an appealing UI, and is optimized for both desktop and mobile devices. Tech Stack: HTML, CSS, JavaScript, PHP, MySQL.",
      image: image3,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/Seyas-2030/Full-Stack-The-stars-cafe"
    },
    {
      id: 4,
      title: "Gulf Master Auto Repair System (GMAR)",
      description: "WPF Desktop Application for auto repair shop management built with C# and .NET 10 using MVVM architecture, featuring job orders, inventory, invoicing, and reporting.",
      image: image4,
      technologies: ["C#", "WPF (.NET 10)", "MVVM", "SQLite"],
      githubUrl: "https://github.com/Seyas-2030/GulfMasterAutoRepairSystem"
    },
    {
      id: 5,
      title: "Qatar MOI-SSD CCTV Calculator",
      description: "Bilingual (AR/EN) engineering web application for security systems engineers to calculate CCTV storage capacity, bandwidth, and verify compliance with Qatar Ministry of Interior (MOI-SSD) regulations.",
      image: image5,
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
      githubUrl: "https://github.com/Seyas-2030/qatar-cctv-calculator"
    },
    {
      id: 6,
      title: "Smart Productivity",
      description: "Full-stack smart productivity web application built with TypeScript to help users organize tasks, track progress, and manage daily workflows efficiently.",
      image: image6,
      technologies: ["TypeScript", "React.js", "Node.js", "REST APIs"],
      githubUrl: "https://github.com/Seyas-2030/Full-stack-smart-productivity"
    },
    {
      id: 7,
      title: "ZU Schedule System",
      description: "Full-stack university scheduling system designed to manage academic timetables, courses, and schedules with a clean and responsive interface.",
      image: image7,
      technologies: ["JavaScript", "Node.js", "Express.js", "MySQL"],
      githubUrl: "https://github.com/Seyas-2030/Full-Stack-ZU_SCHEDULE_SYSTEM"
    },
    {
      id: 8,
      title: "React Workout App",
      description: "Interactive Arabic web application for managing workout routines and exercises, featuring an intuitive UI for tracking training sessions.",
      image: image8,
      technologies: ["React.js", "JavaScript", "CSS3"],
      githubUrl: "https://github.com/Seyas-2030/React-workout-app"
    },
    {
      id: 9,
      title: "Text to Voice Converter",
      description: "Web-based text-to-speech converter built with vanilla JavaScript, HTML5, and CSS3 using the Web Speech API for instant voice synthesis.",
      image: image9,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Seyas-2030/JavaScript-text-to-voice-converter"
    },
    {
      id: 10,
      title: "Salaheddin Portfolio",
      description: "Interactive personal software developer portfolio featuring 3D Three.js visualizations, responsive Tailwind CSS design, and project showcases.",
      image: image10,
      technologies: ["React.js", "TypeScript", "Three.js", "Tailwind CSS"],
      githubUrl: "https://github.com/Seyas-2030/React-SalaheddinPortfolio"
    },
    {
      id: 11,
      title: "NiceCoffeeStore (ASP.NET Core MVC)",
      description: "Full-stack coffee store web application built with ASP.NET Core 10 MVC, Entity Framework Core, MySQL, ASP.NET Identity, SignalR real-time order notifications, shopping cart, checkout with Luhn card validation, loyalty points, Admin dashboard, Docker, and xUnit tests.",
      image: image11,
      technologies: ["C#", "ASP.NET Core 10 MVC", "EF Core", "MySQL", "SignalR", "Docker", "xUnit"],
      githubUrl: "https://github.com/Seyas-2030/NiceCoffeeStore"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development
            and artificial intelligence. Each project demonstrates different aspects of my expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

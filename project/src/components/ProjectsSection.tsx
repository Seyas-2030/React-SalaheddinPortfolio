import React from 'react';
import image1 from '../assets/ai-youtube-short-video-generator.png';
import image2 from '../assets/chat-app.jpeg';
import image3 from '../assets/The_stars_cafe.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Youtube Short Video Generator",
      description: "AI YouTube Shorts Video Generator An AI-powered tool that automatically creates short YouTube videos from simple text inputs. It generates scripts, converts them to natural-sounding voiceovers, adds relevant images or video clips, and produces a ready-to-publish short video.",
      image: image1,
      technologies: ["React.js", "Next.js", "Convex database", "Inngest"]
    },
    {
      id: 2,
      title: "Chat app",
      description: "Real-Time Chat Application A full-stack chat application built with the MERN stack, enabling real-time messaging between users. Features include user authentication, private and group chats, message timestamps, and responsive design for web and mobile devices. Tech Stack: MongoDB, Express.js, React.js, Node.js, Socket.io.",
      image: image2,
      technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"]
    },
    {
      id: 3,
      title: "The stars cafe",
      description: "The Stars Cafe A responsive website for The Stars Cafe showcasing the menu, promotions, and contact information. The site features smooth navigation, an appealing UI, and is optimized for both desktop and mobile devices. Tech Stack: HTML, CSS, JavaScript, PHP, MySQL.",
      image: image3,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
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
                  {project.title}
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

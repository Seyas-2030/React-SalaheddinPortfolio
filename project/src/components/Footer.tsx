import { Code, Heart } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-green-400 flex items-center space-x-2">
              <span>© {currentYear} Salaheddin Salman.</span>
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and</span>
              <Code size={16} className="text-blue-400" />
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              Back to Top
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-green-500 text-sm">
            I build the portfolio with React.js, Three.js, TypeScript, and TailwindCSS ✌️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
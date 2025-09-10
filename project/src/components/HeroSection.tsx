import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x32CD32, // أخضر متوسط
      transparent: true,
      opacity: 0.7,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create rotating torus
    const torusGeometry = new THREE.TorusGeometry(2, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x1E3A8A, // أزرق غامق
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.002;
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToSkills = () => {
    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-500 to-green-500"
    >
      <div ref={mountRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-400">
              Salaheddin Salman
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-green-300 mb-2">
            Software Developer
          </p>
          <p className="text-lg md:text-xl text-blue-200 mb-8">
            Web and Artificial Intelligence
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-green-200 text-lg leading-relaxed">
            I aspire to achieve continuous professional growth, develop my skills and experience
            to enhance my job performance, and be an effective element that adds real value to
            the organization I work for, through creativity and commitment to achieving its goals efficiently.
          </p>
          <p className="text-green-200 text-lg leading-relaxed mt-4">
            I have academic and practical experience in software development and web application
            development using modern technologies for front-end and back-end. I am passionate about
            designing and building innovative digital solutions that help address real-world challenges
            by employing the latest programming tools and techniques.
          </p>
        </div>

        <button
          onClick={scrollToSkills}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-400 hover:from-green-400 hover:to-blue-300 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <span>Explore My Skills</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Skill {
  name: string;
  category:
  | 'Programming Languages'
  | 'Frameworks & Libraries'
  | 'Databases'
  | 'Web Technologies'
  | 'Tools & Software';
  color: string;
}

const SkillsSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const skills: Skill[] = [
    { name: 'JavaScript', category: 'Programming Languages', color: '#F7DF1E' },
    { name: 'Java', category: 'Programming Languages', color: '#007396' },
    { name: 'PHP', category: 'Programming Languages', color: '#777BB4' },
    { name: 'SQL', category: 'Programming Languages', color: '#4479A1' },
    { name: 'Python', category: 'Programming Languages', color: '#3776AB' },
    { name: 'C#', category: 'Programming Languages', color: '#239120' },
    { name: 'React.js', category: 'Frameworks & Libraries', color: '#61DAFB' },
    { name: 'Node.js', category: 'Frameworks & Libraries', color: '#339933' },
    { name: 'Next.js', category: 'Frameworks & Libraries', color: '#000000' },
    { name: 'ASP.NET MVC5', category: 'Frameworks & Libraries', color: '#512BD4' },
    { name: 'MySQL', category: 'Databases', color: '#4479A1' },
    { name: 'MongoDB', category: 'Databases', color: '#47A248' },
    { name: 'Convex', category: 'Databases', color: '#FF6B6B' },
    { name: 'Inngest', category: 'Databases', color: '#6366F1' },
    { name: 'phpMyAdmin', category: 'Databases', color: '#6C78AF' },
    { name: 'HTML5', category: 'Web Technologies', color: '#E34F26' },
    { name: 'CSS3', category: 'Web Technologies', color: '#1572B6' },
    { name: 'TailwindCSS', category: 'Web Technologies', color: '#06B6D4' },
    { name: 'Bootstrap', category: 'Web Technologies', color: '#7952B3' },
    { name: 'jQuery', category: 'Web Technologies', color: '#0769AD' },
    { name: 'GitHub', category: 'Tools & Software', color: '#181717' },
    { name: 'VS Code', category: 'Tools & Software', color: '#007ACC' },
    { name: 'Docker', category: 'Tools & Software', color: '#2496ED' },
    { name: 'Microsoft Office 365', category: 'Tools & Software', color: '#D83B01' },
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || window.innerHeight * 0.6;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const hexagons: THREE.Mesh[] = [];
    const radius = 8;

    // Create hexagons
    skills.forEach((skill, index) => {
      const geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 6);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(skill.color),
        transparent: true,
        opacity: 0.8,
      });

      const hexagon = new THREE.Mesh(geometry, material);

      const angle = (index / skills.length) * Math.PI * 2;
      const spiralRadius = radius * (0.3 + (index / skills.length) * 0.7);

      hexagon.position.x = Math.cos(angle) * spiralRadius;
      hexagon.position.z = Math.sin(angle) * spiralRadius;
      hexagon.position.y = Math.sin(index * 0.5) * 2;

      hexagon.userData = { skill, originalY: hexagon.position.y };
      scene.add(hexagon);
      hexagons.push(hexagon);
    });

    camera.position.y = 5;
    camera.position.z = 15;
    camera.lookAt(0, 0, 0);

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const onMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hexagons);

      if (intersects.length > 0) {
        const mesh = intersects[0].object as THREE.Mesh;
        const skill = mesh.userData.skill as Skill;
        setSelectedSkill(skill.name);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setSelectedSkill(null), 3000);
      }
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

    const animate = () => {
      requestAnimationFrame(animate);

      scene.rotation.y += 0.005;

      hexagons.forEach((hexagon, index) => {
        hexagon.rotation.x += 0.01;
        hexagon.rotation.z += 0.005;
        hexagon.position.y =
          (hexagon.userData.originalY as number) +
          Math.sin(Date.now() * 0.001 + index) * 0.5;
      });

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hexagons);

      hexagons.forEach((hexagon) => {
        const mat = hexagon.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.8;
        hexagon.scale.setScalar(1);
      });

      if (intersects.length > 0) {
        const mesh = intersects[0].object as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 1;
        mesh.scale.setScalar(1.2);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight || window.innerHeight * 0.6;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('click', onClick);

      hexagons.forEach((hex) => {
        (hex.geometry as THREE.BufferGeometry).dispose();
        (hex.material as THREE.Material).dispose();
      });

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  const categories = [
    'Programming Languages',
    'Frameworks & Libraries',
    'Databases',
    'Web Technologies',
    'Tools & Software',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore my technical expertise through interactive 3D visualization.
            Click on any hexagon to learn more about each skill.
          </p>
        </div>

        <div className="relative mb-16">
          <div ref={mountRef} className="w-full h-[500px] flex justify-center" />

          {selectedSkill && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 px-6 py-3 rounded-lg shadow-lg z-10">
              <p className="text-blue-400 font-semibold text-lg">
                {selectedSkill}
              </p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-blue-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-200"
                      style={{ borderLeft: `3px solid ${skill.color}` }}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

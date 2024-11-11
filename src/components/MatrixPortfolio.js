import React, { useState, useEffect, useCallback } from 'react';

// Import gambar
import profileImage from '../images/Profile.jpg';
import project1Image from '../images/project1.jpg';
import project2Image from '../images/project2.jpg';
import project3Image from '../images/project3.jpg';
import project4Image from '../images/project4.jpg';

const MatrixPortfolio = () => {
  const [columns, setColumns] = useState([]);

  const generateCharacter = useCallback(() => {
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const columnWidth = 20; // Lebar setiap kolom dalam pixel
    const numberOfColumns = Math.floor(screenWidth / columnWidth);

    const generateColumn = (index) => {
      const columnHeight = Math.floor(Math.random() * 15) + 15; // 15-30 karakter
      const characters = Array.from({ length: columnHeight }, generateCharacter);
      const speed = Math.random() * 2 + 1; // Kecepatan antara 1-3 detik
      const delay = Math.random() * 2; // Delay awal antara 0-2 detik
      const left = `${(index / numberOfColumns) * 100}%`;

      return {
        characters,
        style: {
          left,
          animationDelay: `${delay}s`,
          '--speed': `${speed}s`,
        },
      };
    };

    const newColumns = Array.from({ length: numberOfColumns }, (_, i) => generateColumn(i));
    setColumns(newColumns);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newNumberOfColumns = Math.floor(newWidth / columnWidth);
      const newColumns = Array.from({ length: newNumberOfColumns }, (_, i) => generateColumn(i));
      setColumns(newColumns);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateCharacter]);

  // Data project
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1. Add your real project details here.",
      technologies: ["React", "Node.js"],
      image: project1Image,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2. Add your real project details here.",
      technologies: ["React", "Node.js"],
      image: project2Image,
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3. Add your real project details here.",
      technologies: ["React", "Node.js"],
      image: project3Image,
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of project 4. Add your real project details here.",
      technologies: ["React", "Node.js"],
      image: project4Image,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 p-8">
      {/* Matrix Rain Background */}
      <div className="matrix-rain-container fixed top-0 left-0 w-full h-full z-0 opacity-20 overflow-hidden">
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="matrix-column absolute animate-matrix-fall"
            style={column.style}
          >
            {column.characters.map((char, charIndex) => (
              <span
                key={charIndex}
                className="matrix-character block"
                style={{
                  animationDelay: `${charIndex * 0.1}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nama Anda</h1>
          <p className="text-xl">Software Developer | Full Stack Engineer</p>
        </header>

        {/* Profile & About Section */}
        <div className="flex gap-8 max-w-4xl mx-auto mb-12">
          <div className="w-1/3">
            <div className="border-2 border-green-500 rounded-lg p-2 bg-black/30">
              <h2 className="text-xl font-bold mb-4">Profile</h2>
              <div className="w-full h-64">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg border border-green-500"
                />
              </div>
            </div>
          </div>

          <div className="w-2/3">
            <div className="border-2 border-green-500 rounded-lg p-6 bg-black/30 h-full">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p>
                Welcome to my Matrix-themed portfolio. I am a passionate developer with
                expertise in web development and software engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-2 border-green-500 rounded-lg p-4 bg-black/30"
              >
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="w-full h-48">
                      <img
                        src={project.image}
                        alt={`Project ${project.id}`}
                        className="w-full h-full object-cover rounded-lg border border-green-500"
                      />
                    </div>
                  </div>
                  <div className="w-2/3">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-sm border border-green-500 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker'].map(
              (skill) => (
                <div
                  key={skill}
                  className="border border-green-500 p-2 text-center rounded-lg"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yourusername" className="hover:text-green-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-green-300">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-green-300">
              Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatrixPortfolio;

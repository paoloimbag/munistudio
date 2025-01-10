import React from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import ParticleField from './components/ParticleField';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import { projects } from './data/projects';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Background />
        <ParticleField />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen text-gray-900 dark:text-white relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white dark:from-black/50 dark:via-black dark:to-black pointer-events-none" />
              {/* Gradient overlay */}
              <div className="relative">
                {/* Hero Section */}
                <header className="container mx-auto px-4 py-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-6xl font-bold mb-6">
                      Paolo Imbag
                      <span className="text-gray-500"> / Digital Designer</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mb-8">
                      Crafting intuitive digital experiences through thoughtful design. 
                      Specializing in UI/UX design, brand identity, and design systems.
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href="mailto:your@email.com" 
                        className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition"
                      >
                        Get in Touch
                      </a>
                      <a 
                        href="https://dribbble.com/paoloimbag" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
                      >
                        View Dribbble
                      </a>
                    </div>
                  </motion.div>
                </header>

                {/* Selected Work */}
                <section className="container mx-auto px-4 py-24">
                  <h2 className="text-2xl font-semibold mb-12">Selected Work</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full aspect-[4/3] object-cover transition transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <Link 
                              to={`/project/${project.id}`}
                              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition"
                            >
                              View Project
                            </Link>
                          </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2 line-clamp-1">{project.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* About Section */}
                <section className="container mx-auto px-4 py-24">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-6">About</h2>
                    <p className="text-gray-400 mb-6">
                      I'm a digital designer with over 5 years of experience creating user-centered 
                      digital products. My approach combines aesthetic sensibility with strategic 
                      thinking to deliver solutions that not only look great but also solve real 
                      problems.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Skills</h3>
                        <ul className="text-gray-400 space-y-2">
                          <li>UI/UX Design</li>
                          <li>Brand Identity</li>
                          <li>Design Systems</li>
                          <li>Prototyping</li>
                          <li>Visual Design</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-4">Tools</h3>
                        <ul className="text-gray-400 space-y-2">
                          <li>Figma</li>
                          <li>Adobe Creative Suite</li>
                          <li>Webflow</li>
                          <li>Framer</li>
                          <li>Principle</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer */}
                <footer className="container mx-auto px-4 py-12 border-t border-gray-200 dark:border-white/10">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400">© 2024 Paolo Imbag. All rights reserved.</p>
                    <div className="flex gap-6">
                      <a 
                        href="https://twitter.com/paoloimbag" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                      >
                        Twitter
                      </a>
                      <a 
                        href="https://linkedin.com/in/paoloimbag" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                      >
                        LinkedIn
                      </a>
                      <a 
                        href="https://instagram.com/paoloimbag" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

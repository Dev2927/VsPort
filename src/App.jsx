import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </motion.div>
      </main>
      <footer className="bg-primary text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Vasundhra Sidhu. Professional Accountant Portfolio.
          </p>
          <p className="text-xs mt-2 opacity-75">
            Meticulous Accounting & Financial Management
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
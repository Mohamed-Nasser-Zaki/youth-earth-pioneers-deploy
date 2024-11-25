import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Projects from '../components/Projects';

const HomePage = () => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Features />
      <Projects />
    </motion.div>
  );
};

export default HomePage;
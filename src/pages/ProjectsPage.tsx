import React from 'react';
import { motion } from 'framer-motion';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectCategories from '../components/projects/ProjectCategories';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import InvestorMentorCTA from '../components/projects/InvestorMentorCTA';
import SuccessStories from '../components/projects/SuccessStories';

const ProjectsPage = () => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      {...pageTransition}
      className="min-h-screen bg-gray-50 pt-16"
    >
      <ProjectsHero />
      <ProjectCategories />
      <FeaturedProjects />
      <ProjectsGrid />
      <InvestorMentorCTA />
      <SuccessStories />
    </motion.div>
  );
};

export default ProjectsPage;
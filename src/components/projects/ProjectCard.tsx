import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    status: string;
  };
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
    >
      <motion.div 
        className="flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
      </motion.div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="text-sm font-medium text-emerald-600"
          >
            {project.category}
          </motion.p>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="mt-3 text-base text-gray-500">
            {project.description}
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mt-4"
          >
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              {project.status}
            </span>
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
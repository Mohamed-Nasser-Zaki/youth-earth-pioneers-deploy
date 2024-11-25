import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from './animation/AnimatedCard';

const projects = [
  {
    title: "Ocean Plastic Recycler",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80",
    category: "Environmental",
    description: "An innovative solution for processing ocean plastic into useful products."
  },
  {
    title: "Smart Solar Gardens",
    author: "James Wilson",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80",
    category: "Renewable Energy",
    description: "Automated garden system powered by solar energy with smart monitoring."
  },
  {
    title: "Biodegradable Packaging",
    author: "Emma Rodriguez",
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80",
    category: "Sustainability",
    description: "Eco-friendly packaging solutions made from organic materials."
  }
];

const Projects = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover innovative solutions created by our young pioneers.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
                </motion.div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm font-medium text-emerald-600"
                    >
                      {project.category}
                    </motion.p>
                    <div className="flex items-center mt-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="h-5 w-5 text-yellow-400" />
                      </motion.div>
                      <h3 className="ml-2 text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-base text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-900">
                      By {project.author}
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
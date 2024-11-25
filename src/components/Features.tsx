import React from 'react';
import { Users, Lightbulb, BookOpen, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Connect with experienced professionals who will guide you through your innovation journey.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Access resources and tools to transform your ideas into impactful projects.'
  },
  {
    icon: BookOpen,
    title: 'Educational Resources',
    description: 'Learn from comprehensive guides and materials designed for young innovators.'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Join a worldwide network of students passionate about sustainability.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Join Youth Earth Pioneers?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover the tools and support you need to make a difference.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <motion.span 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-lg inline-flex p-3 bg-emerald-50 text-emerald-600 ring-4 ring-white"
                >
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </motion.span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {feature.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
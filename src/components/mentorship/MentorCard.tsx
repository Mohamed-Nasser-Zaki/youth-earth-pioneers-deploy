import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

interface MentorCardProps {
  mentor: {
    name: string;
    title: string;
    image: string;
    expertise: string[];
    experience: string;
  };
  delay?: number;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -30 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-64 object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-emerald-600 bg-opacity-20 backdrop-blur-sm flex items-center justify-center"
        >
          <span className="text-white text-lg font-medium">View Profile</span>
        </motion.div>
      </motion.div>
      <div className="p-6">
        <div className="flex items-center">
          <Award className="h-5 w-5 text-emerald-600" />
          <h3 className="ml-2 text-xl font-semibold text-gray-900">{mentor.name}</h3>
        </div>
        <p className="mt-1 text-emerald-600">{mentor.title}</p>
        <div className="mt-4">
          {mentor.expertise.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="inline-block mr-2 mb-2 px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-500">{mentor.experience}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Session
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MentorCard;
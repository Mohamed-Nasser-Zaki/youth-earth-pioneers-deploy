import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  count?: number;
  height?: string;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  count = 1, 
  height = "200px",
  className = "" 
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`bg-gray-200 rounded-lg ${className}`}
          style={{ height }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;
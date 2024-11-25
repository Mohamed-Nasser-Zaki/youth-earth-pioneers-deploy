import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sprout, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sprout className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-gray-900">Youth Earth Pioneers</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-emerald-600 transition-colors">Projects</Link>
            <Link to="/mentorship" className="text-gray-700 hover:text-emerald-600 transition-colors">Mentorship</Link>
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </motion.button>
              </Link>
              <Link to="/signup">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Join Now
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Projects</Link>
              <Link to="/mentorship" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Mentorship</Link>
              <Link to="/signin" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                <div className="inline-flex items-center">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </div>
              </Link>
              <Link to="/signup">
                <button className="w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                  Join Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
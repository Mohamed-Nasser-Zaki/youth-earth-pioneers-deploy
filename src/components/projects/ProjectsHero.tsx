import React from 'react';
import { Search } from 'lucide-react';

const ProjectsHero = () => {
  return (
    <div className="relative bg-emerald-700 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
          alt="Projects background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl">
          Innovative Projects by Future Changemakers
        </h1>
        <p className="mt-6 text-xl text-center max-w-3xl mx-auto">
          Discover groundbreaking ideas from students tackling global challenges and driving sustainability forward.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;
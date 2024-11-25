import React from 'react';
import { Battery, Leaf, Cpu, Sprout, Heart } from 'lucide-react';

const categories = [
  { name: 'Energy', icon: Battery },
  { name: 'Environment', icon: Leaf },
  { name: 'Technology', icon: Cpu },
  { name: 'Agriculture', icon: Sprout },
  { name: 'Health', icon: Heart },
];

const ProjectCategories = () => {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;
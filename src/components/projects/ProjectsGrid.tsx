import React, { useState } from 'react';
import { Filter, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Smart Waste Sorter",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
    category: "Technology",
    description: "AI-powered waste sorting system for efficient recycling.",
    status: "In Development"
  },
  {
    id: 2,
    title: "Vertical Forest",
    author: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80",
    category: "Environment",
    description: "Urban vertical gardens that purify air and support biodiversity.",
    status: "Seeking Funding"
  },
  {
    id: 3,
    title: "Wave Energy Converter",
    author: "David Kim",
    image: "https://images.unsplash.com/photo-1530253464289-a3c0c6d5610f?auto=format&fit=crop&q=80",
    category: "Energy",
    description: "Innovative system to harness ocean wave energy efficiently.",
    status: "Under Review"
  },
  {
    id: 4,
    title: "Biodegradable Electronics",
    author: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80",
    category: "Technology",
    description: "Electronic components that decompose naturally.",
    status: "Prototype"
  }
];

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recent');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="funded">Recently Funded</option>
            </select>
            <button className="inline-flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-600">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      By {project.author}
                    </p>
                  </div>
                  <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200">
                    Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
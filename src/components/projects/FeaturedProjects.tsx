import React from 'react';
import { ArrowRight, Award } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'AI for Precision Farming',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80',
    summary: 'An AI-driven system to optimize water and nutrient use in vertical farms, increasing yields by 30%.',
    tags: ['Seeking Investment', 'Scholarship Winner'],
  },
  {
    id: 2,
    title: 'Ocean Plastic Recycler',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80',
    summary: 'Innovative solution for processing ocean plastic into useful products using solar-powered technology.',
    tags: ['Featured', 'Under Development'],
  },
  {
    id: 3,
    title: 'Smart Solar Gardens',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
    summary: 'Automated garden system powered by solar energy with smart monitoring and water management.',
    tags: ['Funded', 'In Testing'],
  },
];

const FeaturedProjects = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our most innovative and impactful student projects
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-600">
                    {project.category}
                  </p>
                  <div className="flex items-center mt-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <h3 className="ml-2 text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-base text-gray-500">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
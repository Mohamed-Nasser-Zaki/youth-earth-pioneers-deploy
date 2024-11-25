import React from 'react';
import { Award, ArrowRight } from 'lucide-react';

const successStories = [
  {
    id: 1,
    title: "Solar Water Purifier",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80",
    achievement: "Secured $10,000 Funding",
    impact: "Deployed in 5 rural communities",
    description: "A solar-powered water purification system that provides clean drinking water to rural communities."
  },
  {
    id: 2,
    title: "Biodegradable Packaging",
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80",
    achievement: "Partnership with Major Retailer",
    impact: "Reduced plastic waste by 50 tons",
    description: "Eco-friendly packaging solution now being used by a national retail chain."
  },
  {
    id: 3,
    title: "Smart Urban Farm",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80",
    achievement: "Won Global Innovation Award",
    impact: "Adopted by 3 city councils",
    description: "Vertical farming solution that transforms urban spaces into productive gardens."
  }
];

const SuccessStories = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Celebrating the achievements of our young innovators
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story) => (
            <div key={story.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={story.image} alt={story.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <h3 className="ml-2 text-xl font-semibold text-gray-900">
                      {story.title}
                    </h3>
                  </div>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      {story.achievement}
                    </span>
                  </div>
                  <p className="mt-3 text-base text-gray-500">
                    {story.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-emerald-600">
                    Impact: {story.impact}
                  </p>
                </div>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700">
                    Read Full Story
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

export default SuccessStories;
import React, { useState } from 'react';
import { Search, Filter, Award, Calendar } from 'lucide-react';

const mentors = [
  {
    name: 'Dr. James Wilson',
    title: 'Renewable Energy Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    expertise: ['Solar Energy', 'Wind Power', 'Energy Storage'],
    availability: 'Available Now',
    rating: 4.9,
    projects: 15
  },
  {
    name: 'Prof. Lisa Chen',
    title: 'Sustainable Agriculture Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    expertise: ['Vertical Farming', 'Hydroponics', 'Soil Science'],
    availability: 'Next Week',
    rating: 4.8,
    projects: 23
  },
  {
    name: 'Dr. Ahmed Hassan',
    title: 'AI & Robotics Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    expertise: ['Machine Learning', 'Computer Vision', 'Robotics'],
    availability: 'Available Now',
    rating: 4.9,
    projects: 18
  }
];

const MentorDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse Mentors</h2>
          <p className="mt-4 text-xl text-gray-600">
            Find the perfect mentor for your project
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search mentors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border-gray-300 pl-10 focus:border-emerald-500 focus:ring-emerald-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="sm:w-48">
            <select
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              className="w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            >
              <option>All Expertise</option>
              <option>Technology</option>
              <option>Environment</option>
              <option>Energy</option>
              <option>Agriculture</option>
            </select>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            More Filters
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-emerald-600">{mentor.title}</p>
                    <div className="flex items-center mt-1">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">
                        {mentor.rating} • {mentor.projects} projects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-600">
                    {mentor.availability}
                  </span>
                  <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
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

export default MentorDirectory;
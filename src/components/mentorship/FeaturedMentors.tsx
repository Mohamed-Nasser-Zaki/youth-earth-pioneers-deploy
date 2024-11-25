import React from 'react';
import { Award, Calendar } from 'lucide-react';

const featuredMentors = [
  {
    name: 'Dr. Sarah Green',
    title: 'Environmental Scientist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    expertise: 'Sustainability & Climate Solutions',
    experience: '15+ years in environmental research',
  },
  {
    name: 'Prof. Michael Chen',
    title: 'AI Researcher',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    expertise: 'Artificial Intelligence & Machine Learning',
    experience: 'Led 20+ successful AI projects',
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Biotech Innovation Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    expertise: 'Biotechnology & Healthcare',
    experience: 'Founded 2 biotech startups',
  }
];

const FeaturedMentors = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Mentors</h2>
          <p className="mt-4 text-xl text-gray-600">
            Learn from industry experts and accomplished professionals
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredMentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">{mentor.name}</h3>
                </div>
                <p className="mt-1 text-emerald-600">{mentor.title}</p>
                <p className="mt-3 text-gray-500">{mentor.expertise}</p>
                <p className="mt-1 text-sm text-gray-500">{mentor.experience}</p>
                <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMentors;
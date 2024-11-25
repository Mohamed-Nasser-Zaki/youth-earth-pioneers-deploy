import React from 'react';
import { Users } from 'lucide-react';

const MentorshipHero = () => {
  return (
    <div className="relative bg-emerald-700 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="Mentorship"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          Guidance to Turn Your Vision into Reality
        </h1>
        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Connect with experienced mentors to bring your innovative ideas to life.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50">
            <Users className="mr-2 h-5 w-5" />
            Find Your Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipHero;
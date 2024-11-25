import React from 'react';
import { Lightbulb, Users } from 'lucide-react';

const InvestorMentorCTA = () => {
  return (
    <div className="bg-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Investors Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-white">
            <Lightbulb className="h-12 w-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">For Investors</h3>
            <p className="text-white/90 mb-6">
              Support the next generation of innovators. Invest in sustainable solutions that can change the world.
            </p>
            <ul className="space-y-3 mb-8 text-white/80">
              <li>• Access to cutting-edge student projects</li>
              <li>• Early-stage investment opportunities</li>
              <li>• Support sustainable innovation</li>
            </ul>
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-700 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Explore Investment Opportunities
            </button>
          </div>

          {/* Mentors Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-white">
            <Users className="h-12 w-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">For Mentors</h3>
            <p className="text-white/90 mb-6">
              Share your expertise and guide the next generation of innovators in their journey to create impactful solutions.
            </p>
            <ul className="space-y-3 mb-8 text-white/80">
              <li>• Guide student projects</li>
              <li>• Share industry expertise</li>
              <li>• Shape future innovations</li>
            </ul>
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-700 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorMentorCTA;
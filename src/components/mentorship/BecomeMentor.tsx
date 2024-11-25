import React from 'react';
import { Users, Award, Network, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Share Your Expertise',
    description: 'Guide and inspire the next generation of innovators in your field.'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Gain recognition as an expert mentor in our global community.'
  },
  {
    icon: Network,
    title: 'Network Growth',
    description: 'Connect with other professionals and emerging talents.'
  },
  {
    icon: Heart,
    title: 'Make an Impact',
    description: 'Help shape the future by supporting sustainable innovation.'
  }
];

const BecomeMentor = () => {
  return (
    <div className="py-16 bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Become a Mentor</h2>
          <p className="mt-4 text-xl opacity-90">
            Share your knowledge and experience with the next generation of innovators
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mb-6">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-3 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-emerald-700 transition-colors">
            Apply to Become a Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomeMentor;
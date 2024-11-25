import React from 'react';
import { ClipboardList, Users, Calendar } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Submit Your Request',
    description: 'Fill out the mentorship request form with your project details and specific needs.'
  },
  {
    icon: Users,
    title: 'Get Matched',
    description: 'Our system matches you with mentors based on your project requirements and goals.'
  },
  {
    icon: Calendar,
    title: 'Schedule Session',
    description: 'Book your one-on-one mentorship session at a time that works for both of you.'
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Three simple steps to connect with your mentor
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100">
                  <step.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-center text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
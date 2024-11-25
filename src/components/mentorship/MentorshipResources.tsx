import React from 'react';
import { BookOpen, FileText, HelpCircle } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: 'Mentorship Guides',
    items: [
      'How to Prepare for Your First Meeting',
      'Making the Most of Your Sessions',
      'Setting Clear Goals and Expectations'
    ]
  },
  {
    icon: FileText,
    title: 'Templates & Tools',
    items: [
      'Project Proposal Template',
      'Research Methodology Outline',
      'Progress Tracking Sheet'
    ]
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    items: [
      'What to Include in Your Request',
      'Session Duration and Format',
      'Scheduling and Availability'
    ]
  }
];

const MentorshipResources = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Resources for Mentees</h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to make the most of your mentorship journey
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 mb-6">
                <resource.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{resource.title}</h3>
              <ul className="space-y-3">
                {resource.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 hover:text-emerald-600">
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
            <BookOpen className="mr-2 h-5 w-5" />
            Access All Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipResources;
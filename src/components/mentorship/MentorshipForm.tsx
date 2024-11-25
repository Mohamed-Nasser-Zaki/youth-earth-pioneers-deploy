import React from 'react';
import { Send } from 'lucide-react';

const MentorshipForm = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Request Mentorship</h2>
          <p className="mt-4 text-xl text-gray-600">
            Tell us about your project and what kind of guidance you're looking for
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-700">
              Project Title
            </label>
            <input
              type="text"
              id="project"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Project Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="guidance" className="block text-sm font-medium text-gray-700">
              Type of Guidance Needed
            </label>
            <select
              id="guidance"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              <option>Prototype Design</option>
              <option>Research Methodology</option>
              <option>Pitch Presentation</option>
              <option>Technical Implementation</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
              Preferred Meeting Times
            </label>
            <input
              type="text"
              id="availability"
              placeholder="e.g., Weekdays after 3 PM EST"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <Send className="mr-2 h-5 w-5" />
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MentorshipForm;
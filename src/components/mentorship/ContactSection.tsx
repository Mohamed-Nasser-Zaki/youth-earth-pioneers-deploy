import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Have Questions?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our team is here to help you with any questions about the mentorship program
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700">
              <Mail className="mr-2 h-5 w-5" />
              Email Support
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-emerald-600 text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50">
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat
            </button>
          </div>

          <p className="mt-6 text-gray-500">
            Available Monday through Friday, 9AM to 6PM EST
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
import React from 'react';
import { Target, Rocket, Users, Award, BookOpen, Mail } from 'lucide-react';

const About = () => {
  const goals = [
    {
      icon: Target,
      title: "Project Development",
      description: "Support students in developing high-quality scientific projects through structured guidance and resources."
    },
    {
      icon: Users,
      title: "Expert Connections",
      description: "Bridge the gap between students and industry experts, facilitating valuable mentorship relationships."
    },
    {
      icon: Award,
      title: "Recognition & Funding",
      description: "Provide scholarships and connect promising projects with potential investors."
    },
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "Deliver comprehensive educational content to guide students through their research journey."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      description: "Environmental scientist with 15 years of experience in sustainability research."
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Head of Mentorship",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "Leading expert in renewable energy and student mentorship programs."
    },
    {
      name: "Dr. Emily Williams",
      role: "Education Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      description: "Specializes in developing educational programs for young scientists."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-emerald-700 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">About Youth Earth Pioneers</h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Empowering young innovators to address global challenges through mentorship, collaboration, and sustainable solutions.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To cultivate a world where young innovators are at the forefront of solving pressing environmental and societal challenges.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide a platform where students can turn their innovative ideas into impactful projects through mentorship, funding, and educational resources.
            </p>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Aim to Achieve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <goal.icon className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-emerald-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a global movement of young innovators creating solutions for a better future.
          </p>
          <button className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-emerald-700 transition-colors">
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
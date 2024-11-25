import React from 'react';
import { motion } from 'framer-motion';
import MentorshipHero from '../components/mentorship/MentorshipHero';
import HowItWorks from '../components/mentorship/HowItWorks';
import FeaturedMentors from '../components/mentorship/FeaturedMentors';
import MentorshipForm from '../components/mentorship/MentorshipForm';
import MentorDirectory from '../components/mentorship/MentorDirectory';
import MentorshipResources from '../components/mentorship/MentorshipResources';
import BecomeMentor from '../components/mentorship/BecomeMentor';
import ContactSection from '../components/mentorship/ContactSection';

const MentorshipPage = () => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      {...pageTransition}
      className="min-h-screen bg-gray-50 pt-16"
    >
      <MentorshipHero />
      <HowItWorks />
      <FeaturedMentors />
      <MentorshipForm />
      <MentorDirectory />
      <MentorshipResources />
      <BecomeMentor />
      <ContactSection />
    </motion.div>
  );
};

export default MentorshipPage;
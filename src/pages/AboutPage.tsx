import React from 'react';
import SEOHelmet from '@/components/SEOHelmet';

const AboutPage = () => {
  return (
    <>
      <SEOHelmet
        title="About"
        description="Learn more about our company and mission"
        keywords="about, company, mission, team"
        ogTitle="About - Meine Website"
        ogDescription="Learn more about our company and mission"
        canonical="/about"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">Learn more about our company and mission.</p>
      </div>
    </>
  );
};

export default AboutPage;
import React from 'react';
import SEOHelmet from '@/components/SEOHelmet';

const HomePage = () => {
  return (
    <>
      <SEOHelmet
        title="Home"
        description="Welcome to our website homepage"
        keywords="home, welcome, website"
        ogTitle="Home - Meine Website"
        ogDescription="Welcome to our website homepage"
        canonical="/"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg mb-4">This is the homepage of our website.</p>
      </div>
    </>
  );
};

export default HomePage;
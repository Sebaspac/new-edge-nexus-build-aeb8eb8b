import React from 'react';
import SEOHelmet from '@/components/SEOHelmet';

const ContactPage = () => {
  return (
    <>
      <SEOHelmet
        title="Contact"
        description="Get in touch with us"
        keywords="contact, email, phone, address"
        ogTitle="Contact - Meine Website"
        ogDescription="Get in touch with us"
        canonical="/contact"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">Get in touch with us through this page.</p>
      </div>
    </>
  );
};

export default ContactPage;
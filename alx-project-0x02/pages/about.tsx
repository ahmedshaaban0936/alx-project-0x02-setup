import React from 'react';
import Header from '@/components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p>This is the About page of our application.</p>
      </div>
    </div>
  );
};

export default AboutPage;

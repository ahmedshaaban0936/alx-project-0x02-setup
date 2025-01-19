import React from 'react';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      <div className="flex flex-col items-center gap-4">
        <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked!')}>
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked!')}>
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked!')}>
          Large Button
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import Card from '@/components/common/Card';
const HomePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Card 1 Title" content="This is the content for Card 1." />
        <Card title="Card 2 Title" content="This is the content for Card 2." />
        <Card title="Card 3 Title" content="This is the content for Card 3." />
      </div>
    </div>
  );
};

export default HomePage;

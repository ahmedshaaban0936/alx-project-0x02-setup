import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p>Here you can find all the posts.</p>
      </div>
    </div>
  );
};

export default PostsPage;

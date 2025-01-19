import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
      </div>
    </div>
  );

  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6"
      >
        Add New Post
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;

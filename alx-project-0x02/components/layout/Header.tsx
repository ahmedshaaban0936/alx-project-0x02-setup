import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-center space-x-6">
        <Link href="/home">
          <a className="hover:text-blue-400">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:text-blue-400">About</a>
        </Link>
        <Link href="/posts">
          <a className="hover:text-blue-400">Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

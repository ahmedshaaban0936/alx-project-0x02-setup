import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6">
      <nav className="flex space-x-4">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

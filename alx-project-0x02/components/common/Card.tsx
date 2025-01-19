import React from 'react';
import { type CardProps } from '@/interfaces'; // Explicitly importing type CardProps

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;

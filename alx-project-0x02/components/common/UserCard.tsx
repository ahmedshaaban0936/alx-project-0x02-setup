import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">Email: {email}</p>
      <p className="text-gray-700">Address: {address.street}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;

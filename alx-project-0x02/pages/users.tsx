import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

// Using getStaticProps for static data fetching
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  // Mapping data to match UserProps type
  const users = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: user.address,
  }));

  return {
    props: {
      users,
    },
  };
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
      <div className="space-y-4">
        {users.map((user) => (
          <UserCard
            key={user.email} // Assuming email is unique for users
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;

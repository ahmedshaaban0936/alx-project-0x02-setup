import React from 'react';
import { UserProps } from '@/interfaces';   // Import the UserProps type
import UserCard from '@/components/common/UserCard';   // Import the UserCard component

interface UsersPageProps {
  users: UserProps[];
}

// Correctly declare getStaticProps() to fetch data at build time
export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Map data to the UserProps structure
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
  } catch (error) {
    // Handle error by returning empty array as a fallback
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
      <div className="space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.email}  // Use email as the unique key
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage;

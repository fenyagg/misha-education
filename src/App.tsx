import React, { FC, useState } from 'react';
import { Layout } from './layout/Layout';
import { Users } from './components/Users/Users';

interface User {
  username: string;
  department: string;
  position: string;
  phone: string;
  role: string;
}

export const App: FC = (props) => {
  const [users, setUsers] = useState<User[]>([
    {
      username: 'sdf sdf sdf',
      department: 'develop',
      position: 'IOS developer',
      phone: '',
      role: 'IOS Developer',
    },
  ]);
  return (
    <Layout>
      <Users
        users={users}
      />
    </Layout>
  );
};

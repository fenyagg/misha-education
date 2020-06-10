import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Layout } from './layout/Layout';
import { Users } from './components/Users/Users';
import { IUser } from './entries/IUsers';
import { ERole } from './entries/ERules';

export const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: uuidv4(),
      lastName: 'LastName',
      firstName: 'FirstName',
      secondName: 'SecondName',
      birthday: '',
      department: 'develop',
      position: 'IOS developer',
      phone: '',
      email: '',
      role: ERole.IOS,
      gender: 'male',
    },
  ]);
  function addUserHandler(newUser: IUser): void {
    if (newUser.id) {
      const nextUsers = users.map((user) => (newUser.id === user.id ? newUser : user));
      setUsers(nextUsers);
    } else {
      setUsers([...users, { ...newUser, id: uuidv4() }]);
    }
  }
  function deleteUserHandler(userId: string): void {
    const newUsers = users.filter((item) => item.id !== userId);
    setUsers(newUsers);
  }
  return (
    <Layout>
      <Users users={users} onSave={addUserHandler} onDelete={deleteUserHandler} />
    </Layout>
  );
};

import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Layout } from './layout/Layout';
import { Users } from './components/Users/Users';
import { User } from './entries/IUsers';
import { ERole } from './entries/ERules';

interface Modal {
  open: boolean;
}

export const App: FC = () => {
  const [users, setUsers] = useState<User[]>([
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
  function addUserHandler(newUser: User): void {
    if (newUser.id) {
      const nextUsers = users.map((user) => (newUser.id === user.id ? newUser : user));
      setUsers(nextUsers);
    } else {
      setUsers([...users, { ...newUser, id: uuidv4() }]);
    }
  }
  function deleteUserHandler(user: User): void {
    const oldUsers = users.concat();
    const newUsers = oldUsers.filter((item) => item.id !== user.id);
    setUsers(newUsers);
  }
  return (
    <Layout>
      <Users users={users} onSave={addUserHandler} onDelete={deleteUserHandler} />
    </Layout>
  );
};

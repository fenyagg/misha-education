import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Layout } from './layout/Layout';
import { Users } from './components/Users/Users';
import { ERole } from './entries/ERules';
import { Store } from './stores/store';
import { StoreProvider } from './helpers/store-provider';

const store = new Store([
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

// @ts-ignore
window.store = store;

export const App: FC = () => {
  return (
    <StoreProvider value={store}>
      <Layout>
        <Users />
      </Layout>
    </StoreProvider>
  );
};

import React, { FC } from 'react';
import { Layout } from './layout/Layout';
import Users from './components/Users/Users';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
const store = createStore(
  rootReducer,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);
export const App: FC = () => {
  return (
    <Layout>
      <Provider store={store}>
        <Users />
      </Provider>
    </Layout>
  );
};

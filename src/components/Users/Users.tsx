import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { UsersTable } from './UsersTable/UsersTable';
import { UsersModal } from './UsersModal/UsersModal';
import { useStore } from '../../helpers/use-store';
import { useObserver } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

interface IUserProps {
  children?: never;
}

export const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    padding: '0 20px',
  },
  tableWrapper: {
    marginBottom: 40,
  },
  table: {
    width: '100%',
    '& svg': {
      cursor: 'pointer',
    },
    '& svg+svg': {
      marginLeft: 20,
    },
  },
});

export const Users: FC<IUserProps> = () => {
  const styles = useStyles();
  const store = useStore();
  return useObserver(() => (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <UsersTable className={styles.table} />
      </div>
      <Button variant="contained" color="primary" onClick={store.usersModal.addUser}>
        Добавить пользователя
      </Button>
      {store.usersModal.isOpen && <UsersModal />}
    </div>
  ));
};

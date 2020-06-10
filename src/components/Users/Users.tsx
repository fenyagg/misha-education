import React, { FC, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { IUser } from '../../entries/IUsers';
import { UsersTable } from './UsersTable/UsersTable';
import { UsersModal } from './UsersModal/UsersModal';

interface IUserProps {
  users: IUser[];
  onSave: (user: IUser) => void;
  onDelete: (userId: string) => void;
  children?: never;
}
interface IModalData {
  isOpen: boolean;
  userId?: string;
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

export const Users: FC<IUserProps> = ({ users, onSave, onDelete }: IUserProps) => {
  const styles = useStyles();
  const [isModalOpen, setisModalOpen] = React.useState<IModalData>({
    isOpen: false,
    userId: undefined,
  });
  const handleOpen = (): void => {
    setisModalOpen({ isOpen: true });
  };
  const handleClose = (): void => {
    setisModalOpen({ isOpen: false });
  };
  const editUserHandler = (editingUserId: string): void => {
    setisModalOpen({ isOpen: true, userId: editingUserId });
  };
  const editUser = useMemo(() => users.find((user) => user.id === isModalOpen.userId),
    [isModalOpen.userId, users]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <UsersTable
          className={styles.table}
          users={users}
          onDelete={onDelete}
          onSave={onSave}
          onEditUser={editUserHandler}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Добавить пользователя
      </Button>
      {isModalOpen.isOpen && (
        <UsersModal
          open={isModalOpen.isOpen}
          editUser={editUser}
          onClose={handleClose}
          onSave={onSave}
        />
      )}
    </div>
  );
};

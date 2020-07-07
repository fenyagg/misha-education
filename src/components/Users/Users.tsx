import React, { FC, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect, ConnectedProps } from 'react-redux';
import { UsersTable } from './UsersTable/UsersTable';
import { UsersModal } from './UsersModal/UsersModal';
import { IUserState } from '../../redux/types';
import { addUser, editUser, removeUser } from '../../redux/actions';

interface IModalData {
  isOpen: boolean;
  userId?: string;
}
interface RootState {
  users: IUserState[];
}

const mapStateToProps = (state: RootState) => ({
  users: state.users,
});

const mapDispatchToProps = {
  removeUser,
  addUser,
  editUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;
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

export const Users: FC<Props> = (props: Props) => {
  const styles = useStyles();
  const [userModal, setuserModal] = React.useState<IModalData>({
    isOpen: false,
    userId: undefined,
  });
  const handleOpen = (): void => {
    setuserModal({ isOpen: true });
  };
  const handleClose = (): void => {
    setuserModal({ isOpen: false });
  };
  const editIconClickHandler = (editingUserId: string): void => {
    setuserModal({ isOpen: true, userId: editingUserId });
  };
  const deleteUserHandler = (id: string): void => {
    props.removeUser(id);
  };
  const saveUserHandler = (userFromModal: IUserState): void => {
    if (userFromModal && userFromModal.id) {
      props.editUser(userFromModal);
    } else {
      props.addUser(userFromModal);
    }
  };
  const editingUser = useMemo(() => props.users.find((user) => user.id === userModal.userId), [
    userModal.userId,
    props.users,
  ]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <UsersTable
          className={styles.table}
          users={props.users}
          onDelete={deleteUserHandler}
          onEditUser={editIconClickHandler}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Добавить пользователя
      </Button>
      {userModal.isOpen && (
        <UsersModal open={userModal.isOpen} editUser={editingUser} onClose={handleClose} onSave={saveUserHandler} />
      )}
    </div>
  );
};
export default connector(Users);

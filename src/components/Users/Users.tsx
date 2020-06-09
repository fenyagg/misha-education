import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import classes from './Users.module.sass';
import { User } from '../../entries/IUsers';
import { UsersTable } from './UsersTable/UsersTable';
import { UsersModal } from './UsersModal/UsersModal';

interface Props {
  users: User[];
  onSave: (user: User) => void;
  onDelete: (user: User) => void;
  children?: never;
}

export const Users: FC<Props> = ({ users, onSave, onDelete }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [editUser, setEditUser] = useState<User>();
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  const saveModalHandler = (form: User): void => {
    onSave(form);
    setEditUser(undefined);
  };
  const deleteUserHandler = (user: User): void => {
    onDelete(user);
  };
  const editUserHandler = (editingUserId: string): void => {
    const edditingUser = users.find((user) => user.id === editingUserId);
    setEditUser(edditingUser);
    handleOpen();
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.tableWrapper}>
        <UsersTable
          className={classes.table}
          users={users}
          onDelete={deleteUserHandler}
          onSave={saveModalHandler}
          onEditUser={editUserHandler}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Добавить пользователя
      </Button>
      {open && (
        <UsersModal
          open={open}
          editUser={editUser}
          onClose={handleClose}
          onSave={saveModalHandler}
        />
      )}
    </div>
  );
};

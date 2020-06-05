import React, { FC } from 'react';
import classes from './Users.module.sass';
import { UsersTable } from './Table/UsersTable';

type User = {
  username: string;
  department: string;
  position: string;
  phone: string;
  role: string;
}
type Props ={
  users: User[];
  children?: never;
};

export const Users: FC<Props> = ({ users }: Props) => (
  <div className={classes.wrapper}>
    <UsersTable
      users={users}
    />
  </div>
);

import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';
import { useStore } from '../../../helpers/use-store';
import { useObserver } from 'mobx-react-lite';

interface Props {
  className: string;
  children?: never;
}
export const UsersTable: FC<Props> = ({ className }: Props) => {
  const store = useStore();
  return useObserver(() => (
    <div>
      <TableContainer>
        <Table className={className} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell>Отдел</TableCell>
              <TableCell>Должность</TableCell>
              <TableCell>Телефон</TableCell>
              <TableCell>Роль</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.userStore.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {`${user.lastName} ${user.firstName} ${user.secondName}`}
                </TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell align="right">
                  <div>
                    <CreateIcon onClick={(): void => store.usersModal.editUser(user.id!)} />
                    <CancelIcon onClick={(): void => store.userStore.removeUser(user.id!)} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ));
};

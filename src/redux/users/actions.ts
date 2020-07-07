import { USER_ADD, USER_EDIT, USER_REMOVE, UserActionTypes } from './types';
import { IUser } from '../../entries/IUsers';
import { v4 as uuidv4 } from 'uuid';

export const addUser = (user: IUser): UserActionTypes => {
  return {
    type: USER_ADD,
    payload: { ...user, id: uuidv4() },
  };
};

export const removeUser = (id: string): UserActionTypes => {
  return {
    type: USER_REMOVE,
    payload: { id },
  };
};

export const editUser = (user: IUser): UserActionTypes => {
  return {
    type: USER_EDIT,
    payload: user,
  };
};

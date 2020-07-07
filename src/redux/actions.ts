import { IUserState, USER_ADD, USER_EDIT, USER_REMOVE, UserActionTypes } from './types';
import { v4 as uuidv4 } from 'uuid';

export const addUser = ({
  lastName,
  firstName,
  secondName,
  birthday,
  email,
  department,
  position,
  phone,
  role,
  gender,
}: IUserState): UserActionTypes => {
  return {
    type: USER_ADD,
    payload: {
      id: uuidv4(),
      lastName,
      firstName,
      secondName,
      birthday,
      email,
      department,
      position,
      phone,
      role,
      gender,
    },
  };
};

export const removeUser = (id: string): UserActionTypes => {
  return {
    type: USER_REMOVE,
    payload: { id },
  };
};

export const editUser = ({
  id,
  lastName,
  firstName,
  secondName,
  birthday,
  email,
  department,
  position,
  phone,
  role,
  gender,
}: IUserState): UserActionTypes => {
  return {
    type: USER_EDIT,
    payload: { id, lastName, firstName, secondName, birthday, email, department, position, phone, role, gender },
  };
};

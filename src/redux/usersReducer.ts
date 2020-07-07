import { v4 as uuidv4 } from 'uuid';
import { ERole } from '../entries/ERules';
import { IUserState, USER_ADD, USER_EDIT, USER_REMOVE, UserActionTypes } from './types';

export const initialUsersStore: IUserState[] = [
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
];

export const usersReducer = (store = initialUsersStore, action: UserActionTypes): IUserState[] => {
  switch (action.type) {
    case USER_ADD:
      return store.concat([action.payload]);
    case USER_REMOVE:
      return store.filter((user) => user.id !== action.payload.id);
    case USER_EDIT:
      return store.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
    default:
      return store;
  }
};

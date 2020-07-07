import { ERole } from '../entries/ERules';

export interface IUserState {
  id?: string;
  lastName: string;
  firstName: string;
  secondName: string;
  birthday: string;
  email: string;
  department: string;
  position: string;
  phone?: string;
  role?: ERole;
  gender: string;
}

export const USER_ADD = 'USER_ADD';
export const USER_REMOVE = 'USER_REMOVE';
export const USER_EDIT = 'USER_EDIT';

interface IAddUserAction {
  type: typeof USER_ADD;
  payload: IUserState;
}
interface IRemoveUserAction {
  type: typeof USER_REMOVE;
  payload: {
    id: string;
  };
}
interface IEditUserAction {
  type: typeof USER_EDIT;
  payload: IUserState;
}

export type UserActionTypes = IAddUserAction | IRemoveUserAction | IEditUserAction;

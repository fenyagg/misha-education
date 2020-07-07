import { IUser } from '../entries/IUsers';

export const USER_ADD = 'USER_ADD';
export const USER_REMOVE = 'USER_REMOVE';
export const USER_EDIT = 'USER_EDIT';

interface IAddUserAction {
  type: typeof USER_ADD;
  payload: IUser;
}
interface IRemoveUserAction {
  type: typeof USER_REMOVE;
  payload: {
    id: string;
  };
}
interface IEditUserAction {
  type: typeof USER_EDIT;
  payload: IUser;
}

export type UserActionTypes = IAddUserAction | IRemoveUserAction | IEditUserAction;

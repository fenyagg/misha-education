import { UsersStore } from './users/users-store';
import { UsersModal } from './modals/user-modal';
import { IUser } from '../entries/IUsers';

export class Store {
  userStore: UsersStore;
  usersModal = new UsersModal();
  constructor(users: IUser[]) {
    this.userStore = new UsersStore(users);
  }
}

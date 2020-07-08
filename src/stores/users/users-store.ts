import { action, observable } from 'mobx';
import { IUser } from '../../entries/IUsers';

export class UsersStore {
  @observable.shallow users: IUser[];

  constructor(user: IUser[]) {
    this.users = user;
  }

  @action
  addUser = (user: IUser): void => {
    this.users.push(user);
  };

  @action
  removeUser = (userId: string): void => {
    const userToDelete = this.users.find((user) => user.id === userId);
    if (userToDelete) {
      this.users.splice(this.users.indexOf(userToDelete), 1);
    }
  };

  @action
  editUser = (user: IUser): void => {
    this.users = this.users.map((storeUser) => {
      return storeUser.id === user.id ? user : storeUser;
    });
  };
}

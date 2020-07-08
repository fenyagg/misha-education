import { action, observable } from 'mobx';

export class UsersModal {
  @observable isOpen = false;
  @observable editUserId?: string;

  @action
  editUser = (id: string): void => {
    this.isOpen = true;
    this.editUserId = id;
  };

  @action
  addUser = (): void => {
    this.isOpen = true;
  };

  @action
  close = (): void => {
    this.isOpen = false;
    this.editUserId = undefined;
  };
}

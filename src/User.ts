import { User } from "./types/UserType";

export class UserController {
  users: User[];

  constructor() {
    this.users = [];
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  getUsers(): User[] {
    return this.users;
  }
}

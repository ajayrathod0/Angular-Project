import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '', age: 0 };
  editMode = false;
  editingUser: User | null = null;

  addUser() {
    if (this.editMode) {
      this.updateUser();
    } else {
      this.newUser.id = this.users.length + 1;
      this.users.push({ ...this.newUser });
      this.resetForm();
    }
  }

  editUser(user: User) {
    this.editingUser = { ...user };
    this.newUser = { ...user };
    this.editMode = true;
  }

  updateUser() {
    if (this.editingUser) {
      const index = this.users.findIndex(u => u.id === this.editingUser!.id);
      this.users[index] = { ...this.newUser };
      this.resetForm();
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  resetForm() {
    this.newUser = { id: 0, name: '', email: '', age: 0 };
    this.editMode = false;
    this.editingUser = null;
  }
}

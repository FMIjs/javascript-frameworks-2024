import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  userService = inject(UserService);
  usersList$ = this.userService.loadUsers();
}

import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { AsyncPipe, CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { StoreService } from '../+store/store.service';
import { combineLatest, filter, map, of, switchMap, take, tap, zip } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, JsonPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  userService = inject(UserService);
  store = inject(StoreService);

  // usersList$ = this.userService.loadUsers();

  usersList$ = this.store.users$.pipe(tap(d => console.log('User list:', d)));
  usersPage$ = this.store.userPage$.pipe(tap(d => console.log('User page:', d)));

  constructor() {
    this.usersList$.pipe(
      take(1),
      filter(usersList => usersList === null),
      switchMap(() => this.usersPage$.pipe(take(1)))
    ).subscribe(userPage => {
      // this.store.dispatch({ type: 'LOAD_USERS', payload: userPage });

      this.userService.loadUsers(userPage).subscribe(users => {
        this.store.setStore({ users, userPage });
      });
    });
  }

  nextPage(): void {
    this.usersPage$.pipe(
      take(1),
    ).subscribe(userPage => {
      // this.store.dispatch({ type: 'LOAD_USERS', payload: userPage + 1 });
      this.userService.loadUsers(userPage + 1).subscribe(
        users => {
          this.store.setStore({ users, userPage: userPage + 1 });
        });
    })
  }

  prevPage(): void {
    this.usersPage$.pipe(
      take(1),
    ).subscribe(userPage => {
      this.userService.loadUsers(userPage - 1).subscribe(
        users => {
          this.store.setStore({ users, userPage: userPage - 1 });
        });
    })
  }
}

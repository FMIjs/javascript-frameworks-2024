import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './types/data/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getAllUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number | string) {
    return this.http.get<User>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }
}

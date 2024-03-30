import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
}) // { provide: UserService, useClass: UserService }
export class UserService {
  http = inject(HttpClient);

  loadUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}

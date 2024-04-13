import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com';

  httpClient = inject(HttpClient);

  loadUsers(page: number): Observable<IUser[]>{
    const url = `${this.url}/users`;
    return this.httpClient.get<IUser[]>(url).pipe(
      delay(1000)
    );
  }

  loadUserById(id: number): Observable<IUser>{
    const url = `${this.url}/users/${id}`;
    return this.httpClient.get<IUser>(url);
  }
}

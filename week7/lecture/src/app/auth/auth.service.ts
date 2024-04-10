import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  user,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { BehaviorSubject, Subject, catchError, map, tap } from 'rxjs';
import { User } from '../types/data/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  authenticatedUser$$ = new BehaviorSubject<User | null | undefined>(undefined);
  isLoggedIn$ = this.authenticatedUser$$.pipe(
    map((user) => user !== null || user !== undefined)
  );
  isAuthenticating$ = this.authenticatedUser$$.pipe(
    map((user) => user === undefined)
  );

  // auth = inject(Auth);
  // user$ = user(this.auth);
  // isLoggedIn$ = this.user$.pipe(map(Boolean));

  // login(email: string, password: string) {
  //   return signInWithEmailAndPassword(this.auth, email, password);
  // }

  // register(email: string, password: string) {
  //   return createUserWithEmailAndPassword(this.auth, email, password);
  // }

  // logout() {
  //   return signOut(this.auth);
  // }

  authenticate() {
    return this.http.get<User | null>('/users/adsa').pipe(
      tap((user) => {
        this.authenticatedUser$$.next(user);
      }),
      catchError(() => {
        this.authenticatedUser$$.next(null);
        return [];
      })
    );
  }
}

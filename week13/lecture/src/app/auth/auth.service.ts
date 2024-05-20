import { Injectable, OnDestroy, inject } from '@angular/core';
import { BehaviorSubject, Subscription, map, of } from 'rxjs';

interface IUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  userList: IUser[] = [
    {
      email: 'test@test.com',
      password: '123',
    }
  ];

  user$$ = new BehaviorSubject<IUser | null>(null);
  user$ = this.user$$.asObservable();
  isLoggedIn$ = this.user$.pipe(map(Boolean));

  userSubscription$$: Subscription | null = null;

  constructor() {
    const localUser = localStorage.getItem('user');

    if (localUser) {
      try {
        this.user$$.next(JSON.parse(localUser));
      } catch (error) {
        console.error('Invalid user data in local storage');
      }
    }

    this.userSubscription$$ = this.user$.subscribe((user) => {
      if (!user) {
        localStorage.removeItem('user');
        return;
      }
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  ngOnDestroy() {
    this.userSubscription$$?.unsubscribe();
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = this.userList.find(user => user.email === email && user.password === password);
        if (user) {
          this.user$$.next(user);
          resolve(user);
        } else {
          reject('User not found');
        }
      }, 500);
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = this.userList.find(user => user.email === email);
        if (user) {
          reject('User already exists');
        } else {
          const newUser = { email, password };
          this.userList.push(newUser);
          resolve(newUser);
        }
      }, 500);
    });
  }

  logout() {
    return new Promise((resolve) => {
      this.user$$.next(null);
      resolve(null);
    });
  }

  authenticate() {
    // `/authenticate`
    // token? -- { id, role } -----> { id: 1, role: 'admin' } --> { id: 1, role: 'user' } --> 400!!
    // y --> 200 { user }
    // n --> 401
    //       unauthenticated
  }

  refreshTokens() {
    return of(true)
  }
}

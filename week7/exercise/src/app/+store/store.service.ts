import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, distinct, map, share, shareReplay, take, tap } from 'rxjs';
import { IUser } from '../interfaces/user';
import { IPost } from '../interfaces/post';

interface IStore {
  users: IUser[] | null;
  userPage: number;

  posts: IPost[] | null;
}

const INITIAL_STORE: IStore = {
  users: null,
  userPage: 1,
  posts: null
};
enum Actions {
  LOAD_USERS = 'LOAD_USERS',
  LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
  LOAD_POSTS = 'LOAD_POSTS',
  LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS',
}
interface IAction {
  type: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  store$$: BehaviorSubject<IStore> = new BehaviorSubject(INITIAL_STORE);

  private store$ = this.store$$.asObservable().pipe(
    shareReplay(1),
    tap((d) => console.log('Store state:', d)),
  );

  // selectors
  users$ = this.store$.pipe(map((store) => store.users), shareReplay(1));
  userPage$ = this.store$.pipe(map((store) => store.userPage), shareReplay(1));

  constructor() {
    console.log('store service created');
  }

  setStore(data: Partial<IStore>) {
    this.store$$.pipe(
      take(1)
    ).subscribe((store) => {
      this.store$$.next({
        ...store,
        ...data
      });
    });
  }

  // dispatch()
}

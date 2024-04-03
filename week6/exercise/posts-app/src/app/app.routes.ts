import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts', component : PostListComponent,
    children: [
      {
        path: ':id',
        component: PostDetailComponent
      }
    ]
  },
  { path: 'users', component : UserListComponent}
];

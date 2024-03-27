import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

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
  }
];

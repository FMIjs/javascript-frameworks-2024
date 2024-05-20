import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth/guards/auth.guard';
import { AboutComponent } from './about/about.component';
import { unauthGuard } from './auth/guards/unauth.guard';
import { testDeactivate } from './testDeactivate.guard';
import { testMatch } from './testMatch.guard';
import { testActivateChildren } from './testActivateChildren.guard';
import { PostsComponent } from './posts/posts.component';
import { postsResolver } from './posts/posts.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', // matches '/'
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    canDeactivate: [testDeactivate],
  },
  {
    path: 'about',

    canActivate: [authGuard],
    canMatch: [testMatch],
    canActivateChild: [testActivateChildren],

    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AboutComponent,
      },
      {
        path: ':id',
        component: AboutComponent,
      },
    ],

    data: {
      canActivateChildData: {
        disabledIds: ['123'],
        childRedirectRoute: '/about'
      }
    }
  },
  {
    path: 'posts',
    resolve: {posts: postsResolver},
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PostsComponent,
      },
      {
        path: ':id',
        component: PostsComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [unauthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [unauthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];




import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth/auth.guard';
import { AboutComponent } from './about/about.component';

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
  },
  {
    path: 'about',
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
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

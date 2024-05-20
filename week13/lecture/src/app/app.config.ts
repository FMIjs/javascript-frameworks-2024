import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts/posts.service';
import { APIInterceptorProvider } from './api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    APIInterceptorProvider,
    PostsService,
  ],
};

export const API_URL = 'https://jsonplaceholder.typicode.com';

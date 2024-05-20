import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider, inject } from "@angular/core";
import { Observable, catchError, switchMap, take, tap } from "rxjs";
import { API_URL } from "./app.config";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  authService = inject(AuthService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request:', request);
    let newRequest = request;

    const isApiRequest = request.url.startsWith('api');
    if (isApiRequest) {
      newRequest = newRequest.clone({
        url: request.url.replace('api', API_URL),
      });
    }

    return next.handle(newRequest).pipe(
      this.responseHandler,
      this.errorHandler,
    );
  }

  responseHandler(source$: Observable<HttpEvent<any>>): Observable<HttpEvent<any>> {
    return source$.pipe(
      tap(response => console.log('Intercepted response:', response)),
    );
  }

  errorHandler(source$: Observable<HttpEvent<any>>): Observable<HttpEvent<any>> {
    return source$.pipe(
      catchError(error => {
        console.log(error);
        const isAuthError = error.status === 401;
        if (!isAuthError) {
          return [];
        }
        return this.authService.isLoggedIn$.pipe(
          take(1),
          switchMap(isLoggedIn => {
            if (!isLoggedIn) {
              return [];
            }
            return this.authService.refreshTokens().pipe(
              switchMap(() => source$),
              catchError(() => [])
            );
          })
        );
      }),
    );
  }

}

export const APIInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: ApiInterceptor,
};
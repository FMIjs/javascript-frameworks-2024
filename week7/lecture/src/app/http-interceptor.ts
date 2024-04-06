import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const interceptor: HttpInterceptorFn = (req, next) => {
  let headers = new HttpHeaders();
  headers = headers.set('Authentication', 'token');
  let url = req.url;
  if (!url.startsWith('http')) {
    url = API_URL + req.url;
  }
  return next(req.clone({ headers, url }));
};

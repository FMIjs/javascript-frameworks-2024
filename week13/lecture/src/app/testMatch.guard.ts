import { inject } from '@angular/core';
import { CanMatchFn, Route, Router } from '@angular/router';

export const testMatch: CanMatchFn = (route: Route) => {
  // const router = inject(Router);
  // console.log('match', route);
  return true;
  // return router.createUrlTree(['/dashboard']);
};

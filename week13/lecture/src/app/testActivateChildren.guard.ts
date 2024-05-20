import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router } from '@angular/router';

export const testActivateChildren: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot) => {
  const canActivateChildData = childRoute.data['canActivateChildData'];
  if (!canActivateChildData) {
    return true;
  }

  const router = inject(Router);

  const id = childRoute.params['id'];

  if (canActivateChildData.disabledIds.includes(id)) { 
    return router.createUrlTree([canActivateChildData.childRedirectRoute]);
  }
  return true;
};

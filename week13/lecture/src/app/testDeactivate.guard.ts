import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const testDeactivate: CanDeactivateFn<DashboardComponent> = (
  component: DashboardComponent,
) => {
  const { canLeave } = component;
  if (canLeave) {
    return true;
  }

  alert('You must submit the form before leaving the page.');
  return false;
};

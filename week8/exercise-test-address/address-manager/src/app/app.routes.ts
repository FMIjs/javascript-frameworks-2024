import { Routes } from '@angular/router';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddAddressComponent } from './components/add-address/add-address.component';

export const routes: Routes = [
  { path: '', redirectTo: '/addresses', pathMatch: 'full' },
  { path: 'addresses', component: AddressListComponent },
  { path: 'add-address', component: AddAddressComponent }
];
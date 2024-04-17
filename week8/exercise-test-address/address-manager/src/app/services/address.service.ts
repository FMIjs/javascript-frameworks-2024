import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/** Manage address data and interact with it from components. */
export class AddressService {
  // Dummy address data
  readonly addresses = [
    {
      country: 'BG',
      city: 'Sofia',
      street: 'Tsarigradsko shose 7',
      zip: 1000,
    },
    { country: 'BG',
      city: 'Plovdiv',
      street: 'Vasil Aprilov 12',
      zip: 4000 },
    {
      country: 'BG',
      city: 'Varna',
      street: 'Vladislav Varnenchik 33',
      zip: 9000,
    },
  ];

  getAddresses() {
    return this.addresses;
  }
}

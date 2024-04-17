import { Injectable } from '@angular/core';
import { IAddress } from '../models/address';

@Injectable({
  providedIn: 'root',
})
/** Manage address data and interact with it from components. */
export class AddressService {
  initialData = [
    {
      id: 1,
      country: 'BG',
      city: 'Sofia',
      street: 'Tsarigradsko shose 7',
      zip: 1000,
    },
    {
      id: 2,
      country: 'BG',
      city: 'Plovdiv',
      street: 'Vasil Aprilov 12',
      zip: 4000 },
    {
      id: 3,
      country: 'BG',
      city: 'Varna',
      street: 'Vladislav Varnenchik 33',
      zip: 9000,
    },
  ];


  addresses = this.initialData;

  getAddresses(): IAddress[] {
    return this.addresses;
  }

  addAddress(address: IAddress): void {
    address.id = this.addresses.length + 1;
    this.addresses.push(address);
  }

  deleteAddress(id: number): void {
    this.addresses = this.addresses.filter(address => address.id !== id);
  }
}

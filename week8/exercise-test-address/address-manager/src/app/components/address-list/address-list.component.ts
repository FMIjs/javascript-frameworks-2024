import { Component, OnInit, inject } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class AddressListComponent {
  
  private readonly addressService = inject(AddressService);
  private readonly router = inject(Router);
  addresses = this.addressService.getAddresses();

  deleteAddress(id: number): void {
    this.addressService.deleteAddress(id);
    this.addresses = this.addressService.getAddresses();
  }

  navigateToAddAddress(): void {
    this.router.navigate(['/add-address']);
  }

}

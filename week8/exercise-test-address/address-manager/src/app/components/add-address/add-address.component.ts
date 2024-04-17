import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class AddAddressComponent {
  addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private router: Router
  ) {
    this.addressForm = this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.pattern(/^\d{4}$/)],
    });
  }

  formSubmitHandler(): void {
    if (this.addressForm.valid) {
      this.addressService.addAddress(this.addressForm.value);
      this.router.navigate(['/addresses']);
    } else {
      // Handle invalid form
    }
  }

  navigateToAddressList(): void {
    this.router.navigate(['/addresses']);
  }
}

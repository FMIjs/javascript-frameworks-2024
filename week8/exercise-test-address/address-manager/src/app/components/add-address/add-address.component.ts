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
      country: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]+/)]],
      city: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
    });
  }

  get country() {
    return this.addressForm.controls['country'];
}

  get city() {
      return this.addressForm.controls['city'];
  }

  get street() {
    return this.addressForm.controls['street'];
  }

  get zip() {
    return this.addressForm.controls['zip'];
  }

  formSubmitHandler(): void {
    if (this.addressForm.valid) {
      this.addressService.addAddress(this.addressForm.value);
      this.router.navigate(['/addresses']);
    } else {
      // Template itself doesn't allow to submit an invalid form so no need to handle this case (see submit button)
    }
  }

  navigateToAddressList(): void {
    this.router.navigate(['/addresses']);
  }
}

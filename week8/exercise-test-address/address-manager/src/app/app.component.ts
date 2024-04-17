import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressService } from './services/address.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly addressService = inject(AddressService);
  addresses = this.addressService.getAddresses();
  title = 'address-manager';
}

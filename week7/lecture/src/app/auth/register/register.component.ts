import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { matchingFieldValue } from '../../validators/fns/matching-field-value';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  registerForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
    passwordRepeat: new FormControl<string>('', [
      matchingFieldValue('password'),
    ]),
  });

  formSubmitHandler(): void {
    if (this.registerForm.invalid) return;
    const { email, password } = this.registerForm.value;
    // this.authService
    //   .register(email!, password!)
    //   .then(() => {
    //     this.router.navigate(['/dashboard']);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }
}

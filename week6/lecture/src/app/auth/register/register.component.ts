import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

const isMatchingFieldValue: (fieldName: string) => ValidatorFn = (
  fieldName: string
) => {
  let targetSubscription: Subscription | null;
  return (control: AbstractControl): ValidationErrors | null => {
    const form = control.parent;
    if (!form) return null;
    const otherControl = form.get(fieldName);
    if (!otherControl) return null;
    if (!targetSubscription) {
      targetSubscription = otherControl.valueChanges.subscribe({
        next: () => control.updateValueAndValidity({ onlySelf: true }),
        complete: () => {
          targetSubscription!.unsubscribe();
          targetSubscription = null;
        },
      });
    }
    return otherControl.value === control.value
      ? null
      : {
          matchField: {
            currentControlValue: control.value,
            otherControlValue: otherControl.value,
          },
        };
  };
};

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
      isMatchingFieldValue('password'),
    ]),
  });

  formSubmitHandler(): void {
    if (this.registerForm.invalid) return;
    const { email, password } = this.registerForm.value;
    this.authService
      .register(email!, password!)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

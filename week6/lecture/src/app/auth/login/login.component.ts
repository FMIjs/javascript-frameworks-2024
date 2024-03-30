import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

// We have something similar inside the FormsModule
// @Directive({
//   selector: "form",
//   exportAs: "ngFrom"
// })
// export class NgForm {

// }

type LoginFormData = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  authService = inject(AuthService);
  router = inject(Router);

  wrongEmailOrPassword = false;
  isLoading = false;

  formSubmitHandler(): void {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value as LoginFormData;
    this.isLoading = true;
    this.authService
      .login(email, password)
      .then((userCredential) => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.isLoading = false;
        console.log(err);
        this.wrongEmailOrPassword = true;
      });
  }
}

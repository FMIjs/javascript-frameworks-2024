import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  authService = inject(AuthService);
  router = inject(Router);

  isLoading = false;

  logoutHandler() {
    this.isLoading = true;
    this.authService
      .logout()
      .then(() => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error(err);
        this.isLoading = false;
      });
  }
}

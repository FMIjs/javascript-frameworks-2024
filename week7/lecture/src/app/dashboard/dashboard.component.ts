import { Component, OnDestroy, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types/data/user';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnDestroy {
  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);

  subscription = this.activatedRoute.params
    .pipe(
      tap((params) => {
        if ('id' in params) {
          this.user = null;
        } else {
          this.users = null;
        }
      }),
      switchMap((params) =>
        'id' in params
          ? this.userService.getUser(params['id'])
          : this.userService.getAllUsers()
      )
    )
    .subscribe({
      next: (result) => {
        if (Array.isArray(result)) return void (this.users = result);
        this.user = result;
      },
    });

  users: User[] | null = null;
  user: User | null = null;

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

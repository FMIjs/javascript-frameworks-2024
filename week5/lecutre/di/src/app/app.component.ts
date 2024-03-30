import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
  imports: [UserComponent],
})
export class AppComponent {
  title = 'di';
  myTestInstance = inject(UserService);
  users: any[] = [];

  constructor() {
    this.myTestInstance.loadUsers().subscribe((users) => {
      this.users = users;
    });
  }
}

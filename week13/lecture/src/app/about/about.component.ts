import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  activatedRoute = inject(ActivatedRoute);
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;
}

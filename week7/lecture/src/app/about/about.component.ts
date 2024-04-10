import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  activatedRoute = inject(ActivatedRoute);
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;
}

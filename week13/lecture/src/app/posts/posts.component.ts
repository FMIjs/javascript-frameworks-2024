import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {


  activatedRoute = inject(ActivatedRoute);

  posts$ = this.activatedRoute.data.pipe(map(data => data?.['posts']));

  constructor() {
    this.posts$.subscribe(posts => console.log(posts));
  }
}

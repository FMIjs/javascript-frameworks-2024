import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { AsyncPipe } from '@angular/common';
import { Subscription, delay } from 'rxjs';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet]
})
export class PostListComponent implements OnInit, OnDestroy {
  private readonly postService = inject(PostService);
  private readonly route = inject(ActivatedRoute);
  private subscription : Subscription | null = null;

  posts$ = this.postService.loadPosts().pipe(delay(3000));
  selectedPostId: number | null = null;

  ngOnInit(): void {
    this.subscription = this.route.firstChild
      ? this.route.firstChild.params.subscribe(params => {
          this.selectedPostId = parseInt(params['id']);
      })
      : null;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

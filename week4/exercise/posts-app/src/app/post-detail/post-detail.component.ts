import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IPost } from '../interfaces/post';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private readonly postService = inject(PostService);
  private readonly route = inject(ActivatedRoute);
  private subscription : Subscription | null = null;
  post$ : Observable<IPost> | null = null;

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.post$ = this.postService.loadPostById(params['id']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

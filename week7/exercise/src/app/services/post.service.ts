import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IPostCreateDto } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com';

  httpClient = inject(HttpClient);

  loadPosts(): Observable<IPost[]>{
    const url = `${this.url}/posts`;
    return this.httpClient.get<IPost[]>(url);
  }

  loadPostById(id: number): Observable<IPost>{
    const url = `${this.url}/posts/${id}`;
    return this.httpClient.get<IPost>(url);
  }

  createPost(post: IPostCreateDto): Observable<IPost>{
    const url = `${this.url}/posts`;
    return this.httpClient.post<IPost>(url, post)
  }
}

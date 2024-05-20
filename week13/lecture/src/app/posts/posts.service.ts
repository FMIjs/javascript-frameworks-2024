import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class PostsService {
  httpClient = inject(HttpClient);

  loadPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`api/posts`);
  }
}
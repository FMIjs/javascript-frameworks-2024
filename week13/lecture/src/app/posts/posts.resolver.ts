import { inject } from "@angular/core";
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IPost, PostsService } from "./posts.service";

export const postsResolver: ResolveFn<IPost[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(PostsService).loadPosts();
};

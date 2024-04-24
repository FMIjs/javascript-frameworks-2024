import { useCallback, useEffect, useMemo } from "react";
import { PostList } from "../components";
import { PostDetail } from "../components/PostDetail/PostDetail";
import { usePosts } from "../hooks/usePosts";

import styles from './Posts.module.css';

export const Posts = () => {
  const { posts, selectedPost, selectPost, clearSelectedPost } = usePosts()

  return (
    <div className={styles.container}>
      <PostList
        posts={posts}
        postSelectHandler={selectPost}
      />
      {selectedPost &&
        <PostDetail
          post={selectedPost}
          clearSelectedPost={clearSelectedPost}
        />
      }
    </div>
  );
};


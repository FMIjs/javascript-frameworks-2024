import { useCallback, useEffect, useRef, useState } from "react";
import { PostList, PostDetail } from "../../components";
import { usePosts } from "../../hooks/usePosts";

import styles from './Posts.module.css';
import { Post } from "../../interfaces";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Posts = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const location = useLocation();
  console.log('location', location);

  const { posts, selectedPost, selectPost, clearSelectedPost } = usePosts();

  const postSelectHandler = useCallback((postId: Post['id']) => {
    navigate(`/posts/${postId}`);
  }, [navigate]);

  const clearSelectedPostHandler = useCallback(() => {
    navigate('/posts#test');
    clearSelectedPost();
  }, [navigate, clearSelectedPost]);
  // Clear handling #1
  // const clearSelectedPostHandler = useCallback(() => {
  //   navigate('/posts');
  // }, [navigate]);

  useEffect(() => {
    if (!postId) return;
    selectPost(Number(postId));
    // Clear handling #1
    // if (!postId) {
    //   clearSelectedPost();
    // } else {
    //   selectPost(Number(postId));
    // }
  }, [postId, clearSelectedPost, selectPost]);

  return (
    <div className={styles.container}>
      <PostList
        posts={posts}
        postSelectHandler={postSelectHandler}
      />
      {selectedPost &&
        <PostDetail
          post={selectedPost}
          clearSelectedPostHandler={clearSelectedPostHandler}
        />
      }
    </div>
  );
};


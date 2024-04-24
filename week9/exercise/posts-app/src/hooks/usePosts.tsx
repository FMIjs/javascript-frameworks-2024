import { useCallback, useEffect, useState } from "react";

import { Post } from "../interfaces";
import { API_URL } from "../constants";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(setPosts);
  }, []);

  const selectPost = useCallback((postId: Post['id']) => {
    if (!posts?.length) return;
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    setSelectedPost(post);
  }, [posts]);
  const clearSelectedPost = useCallback(() => setSelectedPost(null), []);

  return {
    posts,
    selectedPost,
    setPosts,
    selectPost,
    clearSelectedPost
  }
}
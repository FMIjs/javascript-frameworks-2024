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
    // ...
  }, [posts]);
  const clearSelectedPost = useCallback(() => {
    // ...
  }, []);

  return {
    posts,
    selectedPost,
    setPosts,
    selectPost,
    clearSelectedPost
  };
}
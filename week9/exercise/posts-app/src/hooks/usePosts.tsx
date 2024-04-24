import { useCallback, useEffect, useState } from "react";

import { Post } from "../interfaces";
import { API_URL } from "../constants";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(setPosts);
  }, []);

  const selectPost = useCallback((post: Post) => {}, []);

  return {
    posts,
    setPosts,
    selectPost
  }
}
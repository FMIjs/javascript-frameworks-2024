import { Post } from "../../interfaces";

import styles from './PostDetail.module.css';

interface PostDetailProps {
  post: Post;
  clearSelectedPost?: () => void;
}
export const PostDetail = ({ post, clearSelectedPost }: PostDetailProps) => {
  return <div className={styles.container}>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    {clearSelectedPost && <button type='button' onClick={() => clearSelectedPost()}>Clear Selected Post</button>}
  </div>;
};
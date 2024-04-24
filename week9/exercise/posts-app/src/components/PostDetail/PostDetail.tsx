import { Post } from "../../interfaces";

import styles from './PostDetail.module.css';

interface PostDetailProps {
  post: Post;
  clearSelectedPostHandler?: () => void;
}
export const PostDetail = ({ post, clearSelectedPostHandler }: PostDetailProps) => {
  return <div className={styles.container}>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    {clearSelectedPostHandler && <button type='button' onClick={() => clearSelectedPostHandler()}>Clear Selected Post</button>}
  </div>;
};
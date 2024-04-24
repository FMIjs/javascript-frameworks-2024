import { Post } from '../../interfaces';
import styles from './PostList.module.css';

interface PostListProps {
  posts: Post[];
  postSelectHandler?: (post: Post) => void;
}
export const PostList = (props: PostListProps) => {
  const { posts } = props;
  return <div className={styles.container}>
    {posts.map((post, idx) => (
      <div key={idx} className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>;
};

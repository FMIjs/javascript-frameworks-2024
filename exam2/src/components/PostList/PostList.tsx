import { Post } from '../../interfaces';
import styles from './PostList.module.css';

interface PostListProps {
  posts: Post[];
  postSelectHandler?: (postId: Post['id']) => void;
}
export const PostList = (props: PostListProps) => {
  const { posts, postSelectHandler } = props;
  return <div className={styles.container}>
    {posts.map((post, idx) => (
      <div key={idx} className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {postSelectHandler &&
          <button type='button' onClick={() => postSelectHandler(post.id)}>Select Post</button>
        }
      </div>
    ))}
  </div>;
};

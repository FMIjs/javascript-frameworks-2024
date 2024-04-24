import './App.css';
import { PostList } from './components';
import { usePosts } from './hooks/usePosts';

function App() {
  const { posts, selectPost } = usePosts()

  return (
    <div className="App">
      <PostList
        posts={posts}
        postSelectHandler={selectPost}
      />
    </div>
  );
}

export default App;

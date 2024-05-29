import './App.css';

import {
  Navigate,
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { Posts } from './pages/Posts/Posts';

const postsRoutes = <Route path='/posts'>
  <Route path='/posts' element={<Posts />} />
  <Route path='/posts/:postId' element={<Posts />} />
</Route>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/posts' />} />
          {postsRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

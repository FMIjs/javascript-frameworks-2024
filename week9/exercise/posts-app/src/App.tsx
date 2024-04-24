import './App.css';

import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  Navigate,
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { Posts } from './pages/Posts/Posts';
import { NavBar, UserList } from './components';
import { PageRoute } from './interfaces';
import { Users } from './pages';


// Routing solution #2
const postsRoutes = <Route path='/posts'>
  <Route path='/posts' element={<Posts />} />
  <Route path='/posts/:postId' element={<Posts />} />
</Route>;
const userRoutes = <Route path='/users'>
  <Route path='/users' element={<Users />} />
  <Route path='/users/:userId' element={<Users />} />
</Route>;

const pageRoutes: PageRoute[] = [
  {
    path: '/posts',
    title: 'Posts'
  },
  {
    path: '/users',
    title: 'User'
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar pageRoutes={pageRoutes} />

        <Routes>
          <Route path='/' element={<Navigate to='/posts' />} />
          {postsRoutes}
          {userRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Routing solution #1
// function App() {
//   const routes: RouteObject[] = [
//     {
//       path: '/',
//       element: <Navigate to='/posts' />
//     },
//     {
//       path: '/posts',
//       element: <Posts />
//     },
//     {
//       path: '/posts/:postId',
//       element: <Posts />
//     },
//     // {
//     //   path: '/user',
//     //   element: <Posts />
//     // },
//   ];
//   const router = createBrowserRouter(routes);
//   return (
//     <div className="App">
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

export default App;

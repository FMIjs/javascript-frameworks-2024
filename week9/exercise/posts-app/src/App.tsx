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
import { Posts } from './pages/Posts';


// Routing solution #2
const postsRoutes = <>
  <Route path='/posts'>
    <Route path='/posts' element={<Posts />} />
    <Route path='/posts/:postId' element={<Posts />} />
  </Route>
</>;

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

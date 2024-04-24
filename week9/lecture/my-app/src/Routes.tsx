import { Navigate, Route, RouteObject, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";


const Routes2 = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Navigate to="/home" />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/home/:id',
      element: <Home />
    }
  ];
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />;
};

export default Routes2;

const test = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
  </Routes>;
}
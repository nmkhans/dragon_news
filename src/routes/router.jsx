import { createBrowserRouter } from "react-router";
import App from "./../App";
import Home from "./../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category-news/:id",
        element: <CategoryNews />,
      },
      {
        path: "/news-detail/:id",
        element: (
          <PrivateRoute>
            <NewsDetail />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import App from "./../App";
import Home from "./../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

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
    ],
  },
]);

export default router;

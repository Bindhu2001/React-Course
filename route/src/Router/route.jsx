import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Post from "../Pages/Post";
import Details from "../Pages/Details";

const router = createBrowserRouter(
  [
    { path: '', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'post', element: <Post /> },
    { path: 'post/:id', element: <Details /> },

  ]
);
export default router;
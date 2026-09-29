import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/login.jsx";
import Register from "./features/auth/pages/Register.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/",
    element:<h1>Home page</h1>
  }
]);
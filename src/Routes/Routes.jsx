import { createBrowserRouter } from "react-router-dom";
import AddCraft from "../Components/AddCraft/AddCraft";
import AllCraft from "../Components/AllCraft/AllCraft";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import Home from "../Components/Home/Home";
import Mycraft from "../Components/MyCraft/Mycraft";
import ErrorElement from "../ErrorElement/ErrorElement";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/allCraft",
        element: (
          <PrivateRoute>
            <AllCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCraft",
        element: (
          <PrivateRoute>
            <Mycraft />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

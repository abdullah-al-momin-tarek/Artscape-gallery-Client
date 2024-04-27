import { createBrowserRouter } from "react-router-dom";
import AddCraft from "../Components/AddCraft/AddCraft";
import AllCraft from "../Components/AllCraft/AllCraft";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import CardDetails from "../Components/CardDetails/CardDetails";
import Home from "../Components/Home/Home";
import Mycraft from "../Components/MyCraft/Mycraft";
import UpdateMyCraft from "../Components/MyCraft/UpdateMyCraft";
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
        element: <AllCraft />,
        loader: () => fetch("http://localhost:5000/allCraft"),
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
        path: "/myCraft/:email",
        element: (
          <PrivateRoute>
            <Mycraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myCraft/${params.email}`),
      },
      {
        path: "/craftDetails/:id",
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craftDetails/${params.id}`),
      },
      {
        path: "/updateMyCraft",
        element: (
          <PrivateRoute>
            <UpdateMyCraft />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

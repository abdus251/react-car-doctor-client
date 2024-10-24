import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AddService from "../pages/AddService/AddService";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element:<Home/>
        },
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
          path: 'book/:id',
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'services',
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path:'addService',
          element: <AddService/>
        },
        {
          path: "*",
          element: <NotFound/>
        }
      ]
    },
  ]);

  export default router;
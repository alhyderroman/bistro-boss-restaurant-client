import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        //normal user routes
        {
          path:'cart',
          element:<Cart></Cart>

        },
        //admin only routes
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>

        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Landingpage/Home";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Authentication/Login";
import AuthPovider from "./Authentication/AuthPovider";
import Resister from "./Authentication/Resister";
// import Resister from "./Authentication/Resister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
          path:'/',
          element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/Resister',
        element:<Resister></Resister>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthPovider>
   <RouterProvider router={router} />
   </AuthPovider>
  </React.StrictMode>
);
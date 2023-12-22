import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Landingpage/Home";
import Login from "./Authentication/Login";
import AuthPovider from "./Authentication/AuthPovider";
import Resister from "./Authentication/Resister";
import CreateTask from "./Dashboard/CreateTask";
import RootDashboard from "./Dashboard/RootDashboard";
// import Resister from "./Authentication/Resister";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import PrivateRoute from "./Authentication/PrivateRoute";
import Drag from "./Landingpage/Drag";
import Gallery from "./Navber/Gallery";
import Reviews from "./Navber/Reviews";
import Testimonial from "./Landingpage/Testimonial";
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
        path:'/resister',
        element:<Resister></Resister>
      },
      {
        path:'/gallery',
        element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
      },
      {
        path:'/review',
        element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
      },
      {
        path:'/learn',
        element:<PrivateRoute><Testimonial></Testimonial></PrivateRoute>
      },
      {
        path:'dashboard',
        element:<PrivateRoute><RootDashboard></RootDashboard></PrivateRoute>,
        children:[
          {
            path:'createtask',
            element:<CreateTask></CreateTask>
          },
          {
            path:'draglist',
            element:<Drag></Drag>
          }
        ]
      }
    ]
  },
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthPovider>
   <RouterProvider router={router} />
   </AuthPovider>
    </QueryClientProvider>
  
  </React.StrictMode>
);
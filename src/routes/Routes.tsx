import { Router } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import MyServices from "../pages/MyServices";
import AddService from "../pages/AddService";
import MySchedules from "../pages/MySchedules";

const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/my-services",
        element: <MyServices />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/my-schedules",
        element: <MySchedules />,
      },
    ],
  },
]);

export default router;

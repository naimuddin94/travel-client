import { Router } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import MyServices from "../pages/MyServices";
import AddService from "../pages/AddService";
import MySchedules from "../pages/MySchedules";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import { axiosSecure } from "../hooks/useAxiosSecure";
import UpdateService from "../pages/UpdateService";
import NotFound from "../pages/NotFound";
import SearchResult from "../pages/SearchResult";
import Cart from "../pages/Cart";
import PaymentElement from "../payment/PaymentElement";

const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-schedules",
        element: (
          <PrivateRoute>
            <MySchedules />
          </PrivateRoute>
        ),
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosSecure(`/services/${params.id}`);
          return res.data;
        },
      },
      {
        path: "/update-service/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosSecure(`/services/${params.id}`);
          return res.data;
        },
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <PaymentElement />,
      },
    ],
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import { CreatePost, Explore, Home, People, ProtectedLayout, Saved } from "pages";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { AuthLayout, ForgotPassword, Login, Register, ResetPassword } from "auth";
import { Provider } from "react-redux";
import { store } from "store";
import "./index.css";
import { RootLayout } from "components/ui";

const publicRoutes: RouteObject = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password/:id/:token',
      element: <ResetPassword />
    }
  ],
};

const privateRoutes: RouteObject = {
  path: "/",
  element: <ProtectedLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/people",
      element: <People />,
    },
    {
      path: "/saved",
      element: <Saved />,
    },
    {
      path: "/create-post",
      element: <CreatePost />,
    },
  ],
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [privateRoutes, publicRoutes],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

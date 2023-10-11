import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.css";
import "./global.scss";
import { Sidebar, Topbar } from "./components";
import { Users, Products, Home } from "./pages";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Sidebar />
        <div className="contentContainer">
          <Topbar />
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

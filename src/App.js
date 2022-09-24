import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/home/home.page";


function App() {
  const router = createBrowserRouter([
    {
      path: "/mudaser-sayeedi-portfolio",
      element:<Navigate to="/"/>
    },
    {
      path: "/",
      element: <Navigate to="/home" />,
      errorElement: <div>err</div>,
    },
    {
      path: "home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

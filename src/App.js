import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/home/home.page";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigate to="en/home" />,
      },
      {
        path: "en/home",
        element: <Home />,
      },
    ],
    { basename: "/mudaser-sayeedi-portfolio" }
  );

  return <RouterProvider router={router} />;
}

export default App;

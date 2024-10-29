import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Donation from "./components/HomePages/Donation/Donation";
import Statistics from "./components/HomePages/Statistics/Statistics";
import MainOutlet from "./components/HomePages/MainOutlet/MainOutlet";
import Home from "./components/HomePages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

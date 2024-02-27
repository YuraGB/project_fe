import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";
import SimpleLayout from "@/components/Layouts/SimpleLayout.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;

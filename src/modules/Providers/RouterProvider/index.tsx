import { RouterProvider } from "react-router-dom";
import routes from "@/modules/Routes";
import { type ReactNode } from "react";

const Router = (): ReactNode => (
  <RouterProvider router={routes} future={{ v7_startTransition: true }} />
);

export default Router;

import { Navigate, Outlet } from "react-router-dom";
import { type FC, type PropsWithChildren } from "react";
import { type StoreUser } from "@/modules/servises/auth/endpoints/types.ts";

type Props = PropsWithChildren & {
  user: StoreUser | null;
  redirectPath?: string;
};

const ProtectedRoutes: FC<Props> = ({ user, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;

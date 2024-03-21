import { Navigate, Outlet } from "react-router-dom";
import { type FC, type PropsWithChildren, useEffect } from "react";
import { type StoreUser } from "@/modules/servises/auth/endpoints/types.ts";
import { useVerifyTokenQuery } from "@/modules/servises/auth/endpoints";
import { useAppDispatch } from "@/modules/store";
import { setCredentials } from "@/modules/store/slices/auth/authSlice.ts";

type Props = PropsWithChildren & {
  user: StoreUser | null;
  redirectPath?: string;
};

const ProtectedRoutes: FC<Props> = ({ user, redirectPath = "/login" }) => {
  const { data, isLoading } = useVerifyTokenQuery(undefined, {
    skip: Boolean(user),
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.refreshToken && data.user) {
      dispatch(
        setCredentials({
          user: data.user,
          token: data.accessToken,
        }),
      );
    }
  }, [data]);

  if (!user && !isLoading && !data?.refreshToken) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;

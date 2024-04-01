import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "@/modules/servises/auth/endpoints";
import { useEffect } from "react";
import { logout } from "@/modules/store/slices/auth/authSlice.ts";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { type SerializedError } from "@reduxjs/toolkit";
import { setPages } from "@/modules/store/slices/page/pageSlice.ts";

const useLogout = (): {
  error: FetchBaseQueryError | SerializedError | undefined;
} => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutRequest, { error, data }] = useLogoutMutation();

  useEffect(() => {
    void logoutRequest(undefined);
  }, []);

  useEffect(() => {
    if (data ?? error) {
      dispatch(logout());
      dispatch(setPages([]));
      navigate("/");
    }
  }, [data, error]);
  return { error };
};

export default useLogout;

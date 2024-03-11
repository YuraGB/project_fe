import { useNavigate } from "react-router-dom";
import { type ReactNode, useEffect } from "react";
import { logout } from "@/modules/store/slices/auth/authSlice.ts";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useLogoutMutation } from "@/modules/store/slices/auth/endpoints";
import { useDispatch } from "react-redux";

const Logout = (): ReactNode => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutRequest, { error, data }] = useLogoutMutation();

  useEffect(() => {
    void logoutRequest(undefined);
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(logout());
      navigate("/");
    }
  }, [data]);

  if (error) {
    return <div>Error: {"message" in error ? error.message : ""}</div>;
  }

  return <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
};

export default Logout;

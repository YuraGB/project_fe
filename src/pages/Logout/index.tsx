import { type ReactNode } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import useLogout from "@/pages/Logout/useLogout.ts";

const Logout = (): ReactNode => {
  const { error } = useLogout();

  if (error) {
    return <div>Error: {"message" in error ? error.message : ""}</div>;
  }

  return <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
};

export default Logout;

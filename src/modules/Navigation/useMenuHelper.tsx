import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";
import { useSelector } from "react-redux";
import { type ItemType } from "antd/lib/menu/hooks/useItems";

const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/" rel="noopener noreferrer">
        Home
      </Link>
    ),
    key: "home",
    icon: <HomeFilled />,
  },
  {
    label: (
      <Link to="/about" rel="noopener noreferrer">
        About
      </Link>
    ),
    key: "about",
  },
  {
    label: (
      <Link to="/registration" rel="noopener noreferrer">
        Registration
      </Link>
    ),
    key: "Registration",
    icon: <UserAddOutlined />,
  },
  {
    label: (
      <Link to="/login" rel="noopener noreferrer">
        Login
      </Link>
    ),
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: (
      <Link to="/logout" rel="noopener noreferrer">
        Logout
      </Link>
    ),
    key: "logout",
    icon: <LogoutOutlined />,
  },
];

export const useMenuHelper = (): ItemType[] => {
  const isLogged = useSelector(userSelector);

  return items.filter((item) => {
    if (!item) {
      return false;
    }
    if (item.key === "login" && isLogged) {
      return false;
    }
    return !(item.key === "logout" && !isLogged);
  });
};

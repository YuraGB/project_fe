import { Avatar, type MenuProps } from "antd";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
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
      <Link to="/auth/registration" rel="noopener noreferrer">
        Registration
      </Link>
    ),
    key: "Registration",
    icon: <UserAddOutlined />,
  },
  {
    label: (
      <Link to="/auth/login" rel="noopener noreferrer">
        Login
      </Link>
    ),
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: "User",
    key: "user",
    icon: <Avatar size="large" icon={<UserOutlined />} />,
    children: [
      {
        label: <Link to={"/user"}>User Home</Link>,
        icon: <HomeOutlined />,
        key: "user_home",
      },
      {
        label: <Link to={"/user/profile"}>Profile</Link>,
        icon: <ProfileOutlined />,
        key: "user_profile",
      },
      {
        label: <Link to={"/user/settings"}>Settings</Link>,
        icon: <SettingOutlined />,
        key: "user_settings",
      },
      {
        label: (
          <Link to="/auth/logout" rel="noopener noreferrer">
            Logout
          </Link>
        ),
        key: "logout",
        icon: <LogoutOutlined />,
      },
    ],
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

    if (item.key === "user" && !isLogged) {
      return false;
    }

    return !(item.key === "logout" && !isLogged);
  });
};

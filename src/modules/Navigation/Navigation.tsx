import { HomeFilled } from "@ant-design/icons";
import { type ReactNode, useState } from "react";
import { type MenuProps, Menu } from "antd";
import { Link } from "react-router-dom";

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
    key: "alipay",
  },
];

const Navigation = (): ReactNode => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navigation;

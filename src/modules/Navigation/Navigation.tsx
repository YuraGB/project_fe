import { memo, type ReactNode, useState } from "react";
import { type MenuProps, Menu } from "antd";
import { useMenuHelper } from "@/modules/Navigation/useMenuHelper.tsx";

const Navigation = (): ReactNode => {
  const [current, setCurrent] = useState("mail");
  const items = useMenuHelper();

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

export default memo(Navigation);

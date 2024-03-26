import { type FC } from "react";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { Link } from "react-router-dom";
import classes from "./sideBarItem.module.css";

type SideBarItemProps = {
  item: TPage;
};

const SideBarItem: FC<SideBarItemProps> = ({ item }) => {
  return (
    <li className={classes.root}>
      <Link
        to={item.id.toString()}
        title={item.title}
        style={{
          color: "black",
          textDecoration: "none",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default SideBarItem;

import { type ReactNode } from "react";
import { useSideBar } from "@/modules/SideBar/useSideBar.ts";
import SideBarItem from "@/modules/SideBar/components/SideBarItem";

const SideBar = (): ReactNode => {
  const { pages, error } = useSideBar();
  if (error) {
    return (
      <div
        style={{
          padding: "20px",
        }}
      >
        There are some problems. Please, try to visit later
      </div>
    );
  }
  return (
    <section>
      <ul
        style={{
          listStyleType: "none",
          padding: "50px 20px",
          margin: 0,
        }}
      >
        {pages?.map((page) => <SideBarItem item={page} key={page.id} />)}
      </ul>
    </section>
  );
};

export default SideBar;

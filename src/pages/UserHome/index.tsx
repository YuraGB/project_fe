import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import PagesViewList from "@/modules/PagesViewList";

const UserHome = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <div>
        <h1>User Home</h1>
      </div>
      <PagesViewList />
    </RouteWithAnimation>
  );
};

export default UserHome;

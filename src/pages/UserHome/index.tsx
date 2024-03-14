import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";

const UserHome = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <div>
        <h1>User Home</h1>
      </div>
    </RouteWithAnimation>
  );
};

export default UserHome;

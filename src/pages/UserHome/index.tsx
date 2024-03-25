import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import PagesViewList from "@/modules/PagesViewList";

const UserHome = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <section
        style={{
          margin: "0 auto",
        }}
      >
        <div>
          <h1>User Home</h1>
        </div>
        <PagesViewList />
      </section>
    </RouteWithAnimation>
  );
};

export default UserHome;

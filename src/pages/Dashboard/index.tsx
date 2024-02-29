import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";

const Dashboard = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flexGrow: 1,
        }}
      >
        <span>Dashboard</span>
      </div>
    </RouteWithAnimation>
  );
};

export default Dashboard;

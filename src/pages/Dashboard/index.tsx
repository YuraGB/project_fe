import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";

const Dashboard = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <div>
        <h1>Dashboard</h1>
      </div>
    </RouteWithAnimation>
  );
};

export default Dashboard;

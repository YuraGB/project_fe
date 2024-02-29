import { Link } from "react-router-dom";
import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
const HomePage = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <article
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <span>Home Page</span>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </article>
    </RouteWithAnimation>
  );
};

export default HomePage;

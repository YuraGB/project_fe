import { Link } from "react-router-dom";
import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
const HomePage = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <article
        style={{
          backgroundColor: "rgba(50,248,0,0.67)",
        }}
      >
        <h1>Home Page</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </article>
    </RouteWithAnimation>
  );
};

export default HomePage;

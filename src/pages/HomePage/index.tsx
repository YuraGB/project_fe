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
      </article>
    </RouteWithAnimation>
  );
};

export default HomePage;

import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";

const About = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <article
        style={{
          backgroundColor: "rgba(48,14,72,0.67)",
        }}
      >
        <div>
          <h1>About</h1>
        </div>
      </article>
    </RouteWithAnimation>
  );
};

export default About;

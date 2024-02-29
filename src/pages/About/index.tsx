import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";

const About = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <section
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div>
          <span>About</span>
        </div>
      </section>
    </RouteWithAnimation>
  );
};

export default About;

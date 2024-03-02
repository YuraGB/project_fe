import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import RegistrationForm from "@/modules/RegistrationForm";
import { type ReactNode } from "react";

const Registration = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <RegistrationForm />
    </RouteWithAnimation>
  );
};

export default Registration;

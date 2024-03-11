import { type ReactNode } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import LoginForm from "@/modules/LoginForm";

const LoginPage = (): ReactNode => {
  return (
    <RouteWithAnimation>
      <LoginForm />
    </RouteWithAnimation>
  );
};

export default LoginPage;

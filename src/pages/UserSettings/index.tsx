import { type FC } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import CreateCustomPage from "@/modules/CreateCustomPage";

const UserSettings: FC = () => {
  return (
    <RouteWithAnimation>
      <CreateCustomPage />
    </RouteWithAnimation>
  );
};

export default UserSettings;

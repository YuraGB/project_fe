import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import About from "@/pages/About";
import LocationProvider from "@/modules/Providers/MotionFrameProvider";
import SimpleLayout from "@/components/Layouts/SimpleLayout.tsx";
import { type ReactNode } from "react";
import UserRoutes from "@/modules/Routes/User";
import AuthRoutes from "@/modules/Routes/Auth";

const RoutersComponent = (): ReactNode => {
  return (
    <LocationProvider>
      <Routes>
        <Route path="/" element={<SimpleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/*" element={<AuthRoutes />} />

          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path="/user/*" element={<UserRoutes />} />
      </Routes>
    </LocationProvider>
  );
};

export default RoutersComponent;

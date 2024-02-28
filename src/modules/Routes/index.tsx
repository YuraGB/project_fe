import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import About from "@/pages/About";
import LocationProvider from "@/modules/Providers/MotionFrameProvider";
import SimpleLayout from "@/components/Layouts/SimpleLayout.tsx";
import { type ReactNode } from "react";

const RoutersComponent = (): ReactNode => {
  const location = useLocation();

  return (
    <LocationProvider>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<SimpleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </LocationProvider>
  );
};

export default RoutersComponent;

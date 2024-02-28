import { AnimatePresence } from "framer-motion";
import { type FC, type ReactNode } from "react";

const LocationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <AnimatePresence mode={"wait"}>{children}</AnimatePresence>;
};

export default LocationProvider;

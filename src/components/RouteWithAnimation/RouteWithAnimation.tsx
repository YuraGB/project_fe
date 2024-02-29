import { type FC, type PropsWithChildren } from "react";
import { motion } from "framer-motion";

const RouteWithAnimation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.article
      initial={{
        transform: "scale(0.99) translateY(10px)",
        opacity: 0,
      }}
      animate={{
        transform: [
          " scale(1) translateY(10px)",
          "translateY(0)",
          "translateY(0)",
        ],
        opacity: [0, 0.5, 1],
        transition: {
          duration: 0.5,
        },
      }}
      exit={{
        opacity: [1, 0, 0],
        transform: [
          "scale(1) translateY(0)",
          "translateY(10px)",
          "translateY(0)",
        ],
        transition: {
          duration: 0.2,
        },
      }}
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      {children}
    </motion.article>
  );
};

export default RouteWithAnimation;

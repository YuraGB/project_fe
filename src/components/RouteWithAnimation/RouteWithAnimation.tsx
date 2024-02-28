import { type FC, Fragment, type PropsWithChildren } from "react";
import { motion, type Variants } from "framer-motion";

const childVariants: Variants = {
  enter: {
    x: "100vw",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "50px",
    y: "50px",
    transition: {
      duration: 0.5,
    },
  },
  initial: {
    opacity: 0,
    y: "50px",
    x: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    x: "0px",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const RouteWithAnimation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "black",
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}
      />
      <motion.article
        variants={childVariants}
        initial="initial"
        animate="final"
        exit="initial"
      >
        <motion.section variants={childVariants}>{children}</motion.section>
      </motion.article>
    </Fragment>
  );
};

export default RouteWithAnimation;

import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import classes from "./widgetView.module.css";
import WidgetViewItem from "@/components/WidgetViewItem";
import { type ReactNode, useState } from "react";
import { motion } from "framer-motion";

type WidgetViewProps = {
  widget: TWidget;
};
const WidgetView = (props: WidgetViewProps): ReactNode => {
  const { widget } = props;
  const [showWidget, setShowWidget] = useState<boolean>(false);
  return (
    <motion.div
      role={"list item"}
      className={classes.root}
      onTap={() => {
        setShowWidget(!showWidget);
      }}
      whileHover={"animate"}
      style={{
        overflow: "hidden",
      }}
    >
      <motion.p
        variants={{
          initial: {
            translateY: 0,
            opacity: 0.5,
          },
          animate: {
            translateY: [0, 5, 0],
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          },
        }}
        style={{
          textAlign: "left",
          display: "block",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {widget.widgetData.title ?? "No title"}
      </motion.p>

      <motion.div
        style={{
          overflow: "hidden",
          transform: "scale(0)",
          height: showWidget ? "auto" : 0,
          transition: "all 0.5s ease-in-out",
        }}
        variants={{
          initial: {
            scale: 0,
            opacity: 0,
          },
          animate: {
            scale: 1,
            opacity: 1,
            transition: {
              delayChildren: 5,
              duration: 0.5,
            },
          },
        }}
      >
        <WidgetViewItem widget={widget} />
      </motion.div>
    </motion.div>
  );
};

export default WidgetView;

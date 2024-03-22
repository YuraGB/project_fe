import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import classes from "./widgetView.module.css";
import WidgetViewItem from "@/components/WidgetViewItem";
import { type ReactNode } from "react";

type WidgetViewProps = {
  widget: TWidget;
};
const WidgetView = (props: WidgetViewProps): ReactNode => {
  const { widget } = props;
  return (
    <div role={"list item"} className={classes.root}>
      <h2>{widget.type}</h2>
      <WidgetViewItem widget={widget} />
    </div>
  );
};

export default WidgetView;

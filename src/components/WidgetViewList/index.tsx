import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import WidgetView from "@/components/WidgetView";
import classes from "./widgetList.module.css";
import { type ReactNode } from "react";

type WidgetViewListProps = {
  list: TWidget[];
};

const WidgetViewList = (props: WidgetViewListProps): ReactNode => {
  const { list } = props;

  return (
    <section className={classes.root}>
      {list.map((widget) => (
        <WidgetView key={widget.id} widget={widget} />
      ))}
    </section>
  );
};

export default WidgetViewList;

import { Select } from "antd";
import { type FC } from "react";
import { widgets } from "@/modules/CreateCustomPage/widgetNaming.ts";

const SelectWidget: FC<{ selectedWidget: { current: string } }> = ({
  selectedWidget,
}) => {
  return (
    <section className={"widget"}>
      <Select
        defaultValue={"Select widget type"}
        style={{ width: "100%" }}
        options={[widgets.youtube]}
        onChange={(value) => (selectedWidget.current = value)}
      />
    </section>
  );
};

export default SelectWidget;

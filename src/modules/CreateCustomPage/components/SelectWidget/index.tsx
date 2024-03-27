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
        options={Object.values(widgets)}
        onChange={(value) => (selectedWidget.current = value)}
      />
    </section>
  );
};

export default SelectWidget;

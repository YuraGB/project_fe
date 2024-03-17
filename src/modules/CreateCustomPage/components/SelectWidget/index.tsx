import { Select } from "antd";
import { type TWidgetSelectProps } from "@/modules/CreateCustomPage/types.ts";
import { type FC } from "react";
import { useSelectWidget } from "@/modules/CreateCustomPage/components/SelectWidget/useSelectWidget.ts";
import SelectedWidget from "@/modules/CreateCustomPage/components/SelectedWidget";
import { widgets } from "@/modules/CreateCustomPage/widgetNaming.ts";

const SelectWidget: FC<TWidgetSelectProps> = ({ name, remove, field }) => {
  const { selectedWidget, handleSelectWidget } = useSelectWidget(remove, field);
  return (
    <section className={"widget"}>
      <Select
        defaultValue="Select widget"
        style={{ width: "100%" }}
        onChange={handleSelectWidget}
        options={[widgets.youtube]}
      />

      <SelectedWidget
        widgetName={selectedWidget}
        fieldName={name[0]}
        field={field}
        remove={remove}
      />
    </section>
  );
};

export default SelectWidget;

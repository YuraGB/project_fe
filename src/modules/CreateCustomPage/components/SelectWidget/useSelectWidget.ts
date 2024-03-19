import { useState } from "react";
import { widgets } from "@/modules/CreateCustomPage/widgetNaming.ts";

type TUseSelectWidget = {
  selectedWidget: string | undefined;
  handleSelectWidget: (widget: string) => void;
};
export const useSelectWidget = (): TUseSelectWidget => {
  const [selectedWidget, setSelectedWidget] = useState<string | undefined>(
    widgets.youtube.value,
  );

  const handleSelectWidget = (widget: string): void => {
    setSelectedWidget(widget);
  };

  return {
    selectedWidget,
    handleSelectWidget,
  };
};

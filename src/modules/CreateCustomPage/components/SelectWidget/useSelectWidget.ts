import { useState } from "react";
import { type FormListFieldData, type FormListOperation } from "antd";

type TUseSelectWidget = {
  selectedWidget: string | undefined;
  handleSelectWidget: (widget: string) => void;
  onRemove: () => void;
};
export const useSelectWidget = (
  remove: FormListOperation["remove"],
  field: FormListFieldData,
): TUseSelectWidget => {
  const [selectedWidget, setSelectedWidget] = useState<string | undefined>(
    undefined,
  );

  const onRemove = (): void => { remove(field.name); };

  const handleSelectWidget = (widget: string): void => {
    setSelectedWidget(widget);
  };

  return {
    selectedWidget,
    handleSelectWidget,
    onRemove,
  };
};

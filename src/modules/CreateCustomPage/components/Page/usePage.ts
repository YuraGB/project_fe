import { useState } from "react";
import { type TPage, type TWidget } from "@/modules/CreateCustomPage/types.ts";
import widgetsDefaults from "@/modules/CreateCustomPage/widgetsDefaults.ts";
import { randomString } from "@/util";
import { useInitData } from "@/modules/CreateCustomPage/components/Page/useInitData.ts";

export type TUsePage = {
  widgetsToDisplay: TWidget[];
  addWidget: (widget: string) => void;
  removeWidget: (widgetId: string) => void;
  initData: Record<string, object>;
};
export const usePage = (page: TPage): TUsePage => {
  const { widgets } = page;
  const initData = useInitData(page);
  const [widgetsToDisplay, setWidgetsToDisplay] = useState<TWidget[]>(widgets);

  const addWidget = (widget: string): void => {
    if (!widget) return;
    const newWidget = widgetsDefaults.get(widget.toLowerCase()) as TWidget;

    if (newWidget) {
      setWidgetsToDisplay((prev) => {
        return [...prev, { ...newWidget, id: randomString() }];
      });
    }
  };

  const removeWidget = (widgetId: string): void => {
    setWidgetsToDisplay((prev) => prev.filter((w) => w.id !== widgetId));
  };

  return {
    widgetsToDisplay,
    addWidget,
    removeWidget,
    initData,
  };
};

import { useState } from "react";
import { type TPage, type TWidget } from "@/modules/CreateCustomPage/types.ts";
import widgetsDefaults from "@/modules/CreateCustomPage/widgetsDefaults.ts";
import { randomString } from "@/util";
import { useInitData } from "@/modules/CreateCustomPage/components/Page/useInitData.ts";
import { useRemovePage } from "@/modules/CreateCustomPage/api/useRemovePage.ts";

export type TUsePage = {
  widgetsToDisplay: TWidget[];
  addWidget: (widget: string) => void;
  removeWidget: (widgetId: string) => void;
  initData: Record<string, object>;
  onRemoveHandlerPage: (id: number) => void;
  removeInPageProgress: boolean;
  removedPage: number | undefined;
};

export const usePage = (page: TPage): TUsePage => {
  const { widgets } = page;
  const initData = useInitData(page);

  const [widgetsToDisplay, setWidgetsToDisplay] = useState<TWidget[]>(widgets);
  const {
    isLoading: removeInPageProgress,
    data: removedPage,
    onRemoveHandlerPage,
  } = useRemovePage();

  const addWidget = (widget: string): void => {
    if (!widget) return;
    const newWidget = widgetsDefaults.get(widget.toLowerCase()) as TWidget;

    if (newWidget) {
      setWidgetsToDisplay((prev) => {
        return [{ ...newWidget, id: randomString() }, ...prev];
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
    onRemoveHandlerPage,
    removeInPageProgress,
    removedPage,
  };
};

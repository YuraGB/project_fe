import { useEffect, useState } from "react";
import { type TPage, type TWidget } from "@/modules/CreateCustomPage/types.ts";
import widgetsDefaults from "@/modules/CreateCustomPage/widgetsDefaults.ts";
import { randomString } from "@/util";
import { useInitData } from "@/modules/CreateCustomPage/components/Page/useInitData.ts";
import { useRemovePage } from "@/modules/CreateCustomPage/api/useRemovePage.ts";
import { useRemoveWidgetMutation } from "@/modules/servises/widget/endpoints";

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
  const [
    onRemove,
    { isLoading: _removing, error: _removeError, data: removeData },
  ] = useRemoveWidgetMutation();

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

  useEffect(() => {
    if (removeData?.id) {
      setWidgetsToDisplay((prev) => prev.filter((w) => w.id !== removeData.id));
    }
  }, [removeData]);

  const removeWidget = (widgetId: string | number): void => {
    if (typeof widgetId === "string") {
      setWidgetsToDisplay((prev) => prev.filter((w) => w.id !== widgetId));
    }
    if (typeof widgetId === "number") {
      void onRemove(widgetId);
    }
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

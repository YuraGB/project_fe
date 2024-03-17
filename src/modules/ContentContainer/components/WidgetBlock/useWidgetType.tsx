import YoutubeWidget from "@/modules/ContentContainer/components/YoutubeWidget";
import type React from "react";

export const useWidgetType = (type: string): React.ElementType => {
  const widgetType = new Map();
  widgetType.set("youtubeWidget", YoutubeWidget);

  return widgetType.get(type) as React.ElementType;
};

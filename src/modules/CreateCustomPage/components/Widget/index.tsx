import { type FC, type ReactNode } from "react";
import YoutubeWidgetCreate from "@/modules/CreateCustomPage/components/YoutubeWidgetCreate";
import { type TWidget } from "@/modules/CreateCustomPage/types.ts";

const Widget: FC<{ widget: TWidget; widgetCount: number }> = ({
  widget,
}): ReactNode => {
  switch (widget.type) {
    case "youtube":
      return <YoutubeWidgetCreate widget={widget} />;
    case "image":
      return null;
    case "text":
      return null;
    default:
      return null;
  }
};

export default Widget;

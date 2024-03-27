import { type FC, type ReactNode } from "react";
import YoutubeWidgetCreate from "@/modules/CreateCustomPage/components/YoutubeWidgetCreate";
import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import LinkWidgetCreate from "@/modules/CreateCustomPage/components/LinkWidgetCreate";
import ImageWidgetCreate from "@/modules/CreateCustomPage/components/ImageWidgetCreate";

const Widget: FC<{ widget: TWidget; widgetCount: number }> = ({
  widget,
}): ReactNode => {
  switch (widget.type) {
    case "youtube":
      return <YoutubeWidgetCreate widget={widget} />;
    case "image":
      return <ImageWidgetCreate widget={widget} />;
    case "link":
      return <LinkWidgetCreate widget={widget} />;
    default:
      return null;
  }
};

export default Widget;

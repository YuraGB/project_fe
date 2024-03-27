import { type FC } from "react";
import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import YoutubeWidgetView from "@/components/YoutubeWidgetView";
import LinkWidgetView from "@/components/LinkWidgetView";
import ImageWidgetView from "@/components/ImageWidgetView";

const WidgetViewItem: FC<{ widget: TWidget }> = ({ widget }) => {
  const { type } = widget;

  switch (type) {
    case "text":
      return null;
    case "image":
      return <ImageWidgetView widget={widget} />;
    case "video":
      return null;
    case "link":
      return <LinkWidgetView link={widget} />;
    case "youtube":
      return <YoutubeWidgetView widget={widget} />;
    default:
      return null;
  }
};

export default WidgetViewItem;

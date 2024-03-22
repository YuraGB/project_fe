import { type FC } from "react";
import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import YoutubeWidgetView from "@/components/YoutubeWidgetView";

const WidgetViewItem: FC<{ widget: TWidget }> = ({ widget }) => {
  const { type } = widget;
  console.log(widget);
  switch (type) {
    case "text":
      return null;
    case "image":
      return null;
    case "video":
      return null;
    case "link":
      return null;
    case "youtube":
      return <YoutubeWidgetView widget={widget} />;
    default:
      return null;
  }
};

export default WidgetViewItem;

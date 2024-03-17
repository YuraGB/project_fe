import {
  type ContentProps,
  type TYouTubeWidget,
} from "@/modules/ContentContainer/types.ts";
import { type FC } from "react";
import WidgetBlock from "@/modules/ContentContainer/components/WidgetBlock";

const ContentContainer: FC<ContentProps<TYouTubeWidget>> = ({ content }) => {
  if (content?.length === 0) return null;

  return content.map((widget, index) => {
    const key = widget.type.length + index;
    return <WidgetBlock key={key} {...widget} />;
  });
};

export default ContentContainer;

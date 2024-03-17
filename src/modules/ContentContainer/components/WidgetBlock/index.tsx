import React, { type FC, type ReactNode } from "react";
import {
  type TYouTubeWidget,
  type WidgetBlockProps,
} from "@/modules/ContentContainer/types.ts";
import { useWidgetType } from "@/modules/ContentContainer/components/WidgetBlock/useWidgetType.tsx";

const WidgetBlock: FC<WidgetBlockProps<TYouTubeWidget>> = ({
  type,
  content,
}): ReactNode => {
  const Component = useWidgetType(type) as React.ElementType;

  if (!Component) return null;

  return (
    <section>
      <h1>WidgetBlock</h1>
      <Component content={content} />
    </section>
  );
};

export default WidgetBlock;

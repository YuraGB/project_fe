import { Link } from "react-router-dom";
import { type FC } from "react";
import type { TWidget } from "@/modules/CreateCustomPage/types.ts";
import { type TLinkWidget } from "@/modules/ContentContainer/types.ts";

type LinkWidgetViewProps = {
  link: TWidget;
};

const LinkWidgetView: FC<LinkWidgetViewProps> = ({ link }) => {
  if (!link) return null;
  const { widgetData } = link;
  const { link_url, link_title } = widgetData as TLinkWidget;

  return <Link to={link_url}>{link_title}</Link>;
};

export default LinkWidgetView;

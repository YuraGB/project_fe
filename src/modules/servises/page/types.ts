import { type TWidget } from "@/modules/CreateCustomPage/types.ts";

export type TSaveWidgets = {
  type: string;
  widgets: Array<TWidget["widgetData"]>;
};

export type TSavePage = {
  page_title: string;
  userId: number;
  widgets: TSaveWidgets[];
};

export type TPage = {
  page_title: string;
};

export type TWidgets = {
  type: string;
  widgetData: TWidget["widgetData"];
};

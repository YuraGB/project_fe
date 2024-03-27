export type TWidget<T = { title: string }> = {
  id: number | string;
  type: string;
  title?: string;
  remove?: (id: string) => void;
  widgetData: T;
};

export type TPage = {
  id: number;
  title: string;
  widgets: TWidget[];
};

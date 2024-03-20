export type TWidget<T = object> = {
  id: string;
  type: string;
  remove?: (id: string) => void;
  widgetData: T;
};

export type TPage = {
  id: number;
  title: string;
  widgets: TWidget[];
};

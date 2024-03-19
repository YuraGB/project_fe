export type TWidget<T = object> = {
  id: string;
  type: string;
  remove?: (id: string) => void;
  widgetData: T;
};

export type TPage = {
  id: string;
  title: string;
  widgets: TWidget[];
};

export type TYoutubeType = {
  youtube_title: string;
  youtube_id: string;
};

export type WidgetBlockProps<T> = {
  type: string;
  content: T;
};

export type ContentContainerProps<T> = {
  title: string;
  content: Array<WidgetBlockProps<T>> | [];
};

export type ContentProps<T> = {
  content: Array<WidgetBlockProps<T>> | [];
};

export type TYouTubeWidget = {
  title?: string;
  youtube_title: string;
  youtube_id: string;
};

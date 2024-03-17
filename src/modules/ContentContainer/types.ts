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
  videoId: string;
  title: string;
};

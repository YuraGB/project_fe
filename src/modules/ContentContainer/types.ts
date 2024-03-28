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
  id?: number;
  type?: string;
  title?: string;
  group?: string;
  youtube_title: string;
  youtube_id: string;
};

export type TLinkWidget = {
  id?: number;
  type?: string;
  title?: string;
  group?: string;
  link_url: string;
  link_title: string;
};

export type TImageWidget = {
  id?: number;
  type?: string;
  title?: string;
  group?: string;
  image_link: string;
  image_title: string;
  image_src: string;
};

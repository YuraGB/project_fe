import { type TYouTubeWidget } from "@/modules/ContentContainer/types.ts";
import { type FC } from "react";
import YouTube from "react-youtube";
import { useYoutubeWidget } from "@/modules/ContentContainer/components/YoutubeWidget/useYoutubeWidget.ts";

const YoutubeWidget: FC<TYouTubeWidget> = ({ youtube_title, youtube_id }) => {
  const { opts, onPlayerReady } = useYoutubeWidget();
  if (!youtube_id) return null;
  return (
    <div>
      <h2>{youtube_title}</h2>
      <YouTube
        videoId={youtube_id}
        opts={opts}
        onReady={onPlayerReady}
        iframeClassName={"youtube-widget"}
      />
    </div>
  );
};

export default YoutubeWidget;

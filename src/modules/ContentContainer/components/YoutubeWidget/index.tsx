import { type TYouTubeWidget } from "@/modules/ContentContainer/types.ts";
import { type FC } from "react";
import YouTube from "react-youtube";
import { useYoutubeWidget } from "@/modules/ContentContainer/components/YoutubeWidget/useYoutubeWidget.ts";

const YoutubeWidget: FC<TYouTubeWidget> = ({ title, videoId }) => {
  const { opts, onPlayerReady } = useYoutubeWidget();
  if (!videoId) return null;
  return (
    <div>
      <h2>{title}</h2>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        iframeClassName={"youtube-widget"}
      />
    </div>
  );
};

export default YoutubeWidget;

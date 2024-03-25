import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import { type FC } from "react";
import { type TYouTubeWidget } from "@/modules/ContentContainer/types.ts";
import YouTube from "react-youtube";

const YoutubeWidgetView: FC<{ widget: TWidget }> = ({ widget }) => {
  if (!widget?.widgetData) return null;

  const { widgetData } = widget;

  const { youtube_id, youtube_title } = widgetData as TYouTubeWidget;

  return (
    <section>
      <h3>{youtube_title}</h3>
      <YouTube
        videoId={youtube_id} // defaults -> ''
        // id={string} // defaults -> ''
        // className={string} // defaults -> ''
        // iframeClassName={string} // defaults -> ''
        // style={object} // defaults -> {}
        title={youtube_title} // defaults -> ''
        // loading={string} // defaults -> undefined
        // opts={obj} // defaults -> {}
        // onReady={func} // defaults -> noop
        // onPlay={func} // defaults -> noop
        // onPause={func} // defaults -> noop
        // onEnd={func} // defaults -> noop
        // onError={func} // defaults -> noop
        // onStateChange={func} // defaults -> noop
        // onPlaybackRateChange={func} // defaults -> noop
        // onPlaybackQualityChange={func} // defaults -> noop
      />
    </section>
  );
};

export default YoutubeWidgetView;

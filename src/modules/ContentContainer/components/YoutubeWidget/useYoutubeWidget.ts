import { type YouTubeProps } from "react-youtube";

type TUseYoutubeWidget = {
  onPlayerReady: YouTubeProps["onReady"];
  opts: {
    height: string;
    width: string;
    playerVars: {
      autoplay: number;
    };
  };
};

export const useYoutubeWidget = (): TUseYoutubeWidget => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return {
    onPlayerReady,
    opts,
  };
};

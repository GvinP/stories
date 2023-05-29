import { FC, useEffect, useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";

import styles from "./styles";

interface VideoPlayerProps {
  video: {
    content?: number;
    uri?: string;
  };
  isPaused?: boolean;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ video, isPaused = true }) => {
  const videoRef = useRef<Video>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      videoRef.current?.playAsync();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isPaused) {
      videoRef.current?.pauseAsync();
    } else {
      videoRef.current?.playAsync();
    }
  }, [isPaused]);

  return (
    <Video
      ref={videoRef}
      source={video.content ?? { uri: `${video.uri}` }}
      style={styles.video}
      resizeMode={ResizeMode.COVER}
      onPlaybackStatusUpdate={(status) => {
        if (status.isLoaded) {
          setIsLoaded(true);
        }
      }}
    />
  );
};

export default VideoPlayer;

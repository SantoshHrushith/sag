import React from "react";

type VideoPlayerProps = {
  src: string; // video URL
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoPlay = true,
  loop = false,
  muted = true,
  controls = false,
  className = "",
}) => {
  return (
    <div className={`w-[80%] h-[70%] overflow-hidden rounded-xl ${className}`}>
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;

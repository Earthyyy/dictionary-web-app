import { FC, useEffect, useState } from "react";
import { useMemo } from "react";

interface PlayButtonProps {
  audioUrl: string;
}

const PlayButton: FC<PlayButtonProps> = ({ audioUrl }) => {
  const audio = useMemo(() => new Audio(audioUrl), [audioUrl]);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSound = () => {
    audio.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [audio]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75 75"
      width={75}
      height={75}
      className="cursor-pointer w-12 h-12 tablet:w-[4.6875rem] tablet:h-[4.6875rem] group"
      onClick={playSound}
    >
      <g className="fill-primary" fillRule="evenodd">
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          opacity={0.25}
          className={`group-hover:opacity-100 ${isPlaying && "opacity-100"}`}
        />
        <path
          d="M29 27v21l21-10.5z"
          className={`group-hover:fill-white ${isPlaying && "fill-white"}`}
        />
      </g>
    </svg>
  );
};

export default PlayButton;

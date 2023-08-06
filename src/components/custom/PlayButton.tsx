import { FC } from "react";

interface PlayButtonProps {}

const PlayButton: FC<PlayButtonProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75 75"
      className="cursor-pointer w-12 h-12 md:w-[4.6875rem] md:h-[4.6875rem] group"
      {...props}
    >
      <g className="fill-primary" fillRule="evenodd">
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          className="opacity-25 group-hover:opacity-100"
        />
        <path d="M29 27v21l21-10.5z" className="group-hover:fill-white" />
      </g>
    </svg>
  );
};

export default PlayButton;

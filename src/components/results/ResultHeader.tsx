import PlayButton from "../custom/PlayButton";
import { FC } from "react";

interface Props {
  header: {
    word: string;
    phonetics: {
      text?: string;
      audio?: string;
    }[];
  };
}

const ResultHeader: FC<Props> = ({ header }) => {
  let phonetic;
  if (header) {
    phonetic = header.phonetics.find((phonetic) => {
      return phonetic.text && phonetic.audio;
    });
  }
  return (
    <>
      {header && (
        <header className="flex items-center justify-between mb-7 tablet:mb-10">
          <div className="flex flex-col tablet:gap-y-2">
            <h1 className="text-secondary heading-lg">
              {header.word.charAt(0).toUpperCase() + header.word.slice(1)}
            </h1>
            <span className="text-primary body-md tablet:heading-md">
              {phonetic?.text}
            </span>
          </div>
          {phonetic?.audio && <PlayButton audioUrl={phonetic.audio} />}
        </header>
      )}
    </>
  );
};

export default ResultHeader;

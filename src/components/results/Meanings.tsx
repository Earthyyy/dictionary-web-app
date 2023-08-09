import Meaning from "./Meaning";
import { FC } from "react";

interface Props {
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms?: string[];
    }[];
    synonyms: string[];
  }[];
}

const Meanings: FC<Props> = ({ meanings }) => {
  return (
    <div>
      {meanings.map((meaning, idx: number) => (
        <Meaning key={idx} data={meaning} />
      ))}
    </div>
  );
};

export default Meanings;

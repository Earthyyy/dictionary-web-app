import { FC } from "react";

interface Props {
  data: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms?: string[];
    }[];
    synonyms: string[];
  };
}

const Meaning: FC<Props> = ({ data }) => {
  return (
    <div className="pb-10">
      <div className="partOfSpeech | flex items-center gap-[1.125rem] tablet:gap-[1.4375rem] mb-8 tablet:mb-10">
        <h3 className="text-secondary text-lg/6 tablet:heading-md">
          {data.partOfSpeech}
        </h3>
        <hr className="h-[1px] w-full" />
      </div>

      <div className="meaning | ">
        <h4 className="text-tertiary text-base/5  tablet:heading-sm mb-4 tablet:mb-6">
          Meaning
        </h4>
        <ul className="flex flex-col gap-3 list-disc ">
          {data.definitions.map((definition, idx) => (
            <li
              className="text-base/6 tablet:body-md text-secondary marker:text-primary ml-4 desktop:ml-[2.375rem]"
              key={idx}
            >
              <p className="pl-4">{definition.definition}</p>
            </li>
          ))}
        </ul>
      </div>

      {data.synonyms.length > 0 && (
        <div className="synonyms | flex gap-10 desktop:gap-6 mt-6 tablet:mt-10 desktop:mt-16">
          <h4 className="text-tertiary text-base/5  tablet:heading-sm mb-4 tablet:mb-6">
            Synonyms
          </h4>
          <div>
            <ul className="flex flex-wrap gap-3">
              {data.synonyms.map((synonym, idx) => (
                <li
                  className="text-base/5 tablet:text-xl/5 desktop:text-xl/7 font-bold text-primary"
                  key={idx}
                >
                  {synonym}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meaning;

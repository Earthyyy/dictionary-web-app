import { FC } from "react";
import Source from "./Source";
import Meanings from "./results/Meanings";
import ResultHeader from "./results/ResultHeader";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import NotFound from "./NotFound";

interface Props {
  search: string;
}

const SearchResults: FC<Props> = ({ search }) => {
  const { data } = useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      let res;
      try {
        res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        );
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) {
            return [];
          }
          throw error;
        }
      }
      return res?.data;
    },
    enabled: search !== "",
    retry: false,
  });

  return (
    <div>
      {data ? (
        data.length > 0 ? (
          <>
            <ResultHeader
              header={{
                word: data[0].word,
                phonetics: data[0].phonetics,
              }}
            />
            <Meanings meanings={data[0].meanings} />
            <Source source={data[0].sourceUrls} />
          </>
        ) : (
          <NotFound />
        )
      ) : null}
    </div>
  );
};

export default SearchResults;

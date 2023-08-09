import { FC } from "react";
import Source from "./Source";
import Meanings from "./results/Meanings";
import ResultHeader from "./results/ResultHeader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NotFound from "./NotFound";

const API_URL = import.meta.env.VITE_API_URL;

interface Props {
  search: string;
}

const SearchResults: FC<Props> = ({ search }) => {
  const { data } = useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      let res;
      try {
        res = await axios.get(`${API_URL}/${search}`);
      } catch (error) {
        return [];
      }
      return res.data;
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

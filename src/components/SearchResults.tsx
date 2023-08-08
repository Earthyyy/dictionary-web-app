import Source from "./Source";
import Meanings from "./results/Meanings";
import ResultHeader from "./results/ResultHeader";

const SearchResults = () => {
  return (
    <div>
      <ResultHeader />
      <Meanings />
      <Source />
    </div>
  );
};

export default SearchResults;

import PlayButton from "../custom/PlayButton";

const ResultHeader = () => {
  return (
    <header className="flex items-center justify-between mb-7 tablet:mb-10">
      <div className="flex flex-col tablet:gap-y-2">
        <h1 className="text-secondary heading-lg">Keyboard</h1>
        <span className="text-primary body-md tablet:heading-md">
          /ˈkiːbɔːd/
        </span>
      </div>

      <PlayButton />
    </header>
  );
};

export default ResultHeader;

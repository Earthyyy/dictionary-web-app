const Source = () => {
  return (
    <div className="flex flex-col gap-2 pt-6  border-t tablet:flex-row tablet:gap-6 tablet:pt-5 ">
      <h5 className="body-sm underline text-tertiary">Source</h5>
      <a
        href="https://en.wiktionary.org/wiki/keyboard"
        target="_blank"
        className="flex items-center gap-2"
      >
        <span className="text-secondary body-sm">
          https://en.wiktionary.org/wiki/keyboard
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path
            fill="none"
            stroke="#838383"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
          />
        </svg>
      </a>
    </div>
  );
};

export default Source;

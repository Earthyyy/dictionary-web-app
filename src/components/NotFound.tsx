const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 pt-16">
      <span className="heading-lg">😕</span>
      <h3 className="heading-sm font-bold">No Definitions Found</h3>
      <p className="body-md text-tertiary">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NotFound;

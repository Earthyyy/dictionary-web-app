const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 pt-16">
      <span className="heading-lg">💀</span>
      <h3 className="heading-sm font-bold text-error">Internal Server Error</h3>
      <p className="body-md text-tertiary">
        Sorry pal, we are having some issues with our server. You can try the
        search again at later time or head to the web
      </p>
    </div>
  );
};

export default Error;

import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import SearchResults from "./components/SearchResults";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ResultShell from "./components/loaders/ResultShell";
import Error from "./components/Error";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [font, setFont] = useState<string>("sans");
  const [search, setSearch] = useState<string>("");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const changeFont = (font: string) => {
    setFont(font);
  };

  return (
    <div className={`${theme} ${font} min-h-screen bg-main transition-colors`}>
      <Navbar toggleTheme={toggleTheme} changeFont={changeFont} />
      <main className="ctnr pb-16">
        <SearchField setSearch={setSearch} />
        <Suspense fallback={<ResultShell />}>
          <ErrorBoundary fallback={<Error />}>
            <SearchResults search={search} />
          </ErrorBoundary>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

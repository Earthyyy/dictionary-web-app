import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import SearchResults from "./components/SearchResults";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [font, setFont] = useState<string>("sans");

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
        <SearchField />
        <SearchResults />
      </main>
    </div>
  );
}

export default App;

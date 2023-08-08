import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="light inconsolata min-h-screen bg-main">
      <Navbar />
      <main className="ctnr pb-16">
        <SearchField />
        <SearchResults />
      </main>
    </div>
  );
}

export default App;

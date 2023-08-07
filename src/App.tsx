import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="light lora min-h-screen bg-main">
      <Navbar />
      <main className="ctnr">
        <SearchField />
        <SearchResults />
      </main>
    </div>
  );
}

export default App;

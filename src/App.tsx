import PlayButton from "./components/custom/PlayButton";
import ThemeSwitcher from "@/components/custom/ThemeSwitcher";

function App() {
  return (
    <div className="light lora">
      <h1 className="heading-lg">Hello, World</h1>
      <PlayButton />
      <ThemeSwitcher />
    </div>
  );
}

export default App;

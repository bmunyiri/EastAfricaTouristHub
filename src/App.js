import "./styles.css";
import Kenya from "./Components/Kenya";
import Tanzania from "./Components/Tanzania";
import Uganda from "./Components/Uganda";
import ResponsiveAppBar from "./Components/ResponsiveAppBar"

export default function App() {
  return (
    <div className="App">
    <ResponsiveAppBar />
      <Kenya />
      <Tanzania />
      <Uganda />
    </div>
  );
}

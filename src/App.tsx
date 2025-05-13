import Header from "../src/features/MatchTracker/components/Header";
import MatchList from "./features/MatchTracker/components/MatchList";
function App() {
  return (
    <div style={{ background: "black" }} className="App">
      <Header />
      <MatchList />
    </div>
  );
}

export default App;

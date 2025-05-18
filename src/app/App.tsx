import Header from "./layouts/Header/Header";
import MatchList from "../features/matchList/ui/MatchList";
function App() {
  return (
    <div style={{ background: "black" }} className="App">
      <Header />
      <MatchList />
    </div>
  );
}

export default App;

import Header from "./shared/assets/layout/Header/Header";
import MatchList from "./features/MatchTracker/components/MatchList/MatchList";
function App() {
  return (
    <div style={{ background: "black" }} className="App">
      <Header />
      <MatchList />
    </div>
  );
}

export default App;

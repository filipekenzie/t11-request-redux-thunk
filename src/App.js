
import "./App.css";
import Search from "./components/Search";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Pokemons />
      </header>
    </div>
  );
}

export default App;

import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
      </div>
      <footer>
        This project was coded by Courtney Davis and is{" "}
        <a
          href="https://github.com/cdavis1809?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          open sourced.
        </a>
      </footer>
    </div>
  );
}

export default App;

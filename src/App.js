import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer className="mt-2">
          <small>
            Open-source on
            <a href="https://github.com/LuciaTilnakova/weather-search-app">
              {" "}
              GitHub
            </a>
            , by
            <a href="https://brave-morse-fe6f9e.netlify.app/">
              {" "}
              Lucia Tilnakova
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

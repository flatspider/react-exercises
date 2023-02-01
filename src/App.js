import logo from "./logo.svg";
import "./App.css";
import { TopNavBar } from "./top-buttons/top-nav-bar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {TopNavBar()}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
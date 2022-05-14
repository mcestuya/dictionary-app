import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="beautiful" />
        </main>
        <footer className="App-footer">
          <small>Coded by SheCodes</small>
        </footer>
      </div>
    </div>
  );
}

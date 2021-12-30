import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MusicShop</h1>

      <NavBar />
      </header>
    </div>
  );
}

export default App;

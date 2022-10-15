import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;

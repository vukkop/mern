import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import SinglePorduct from "./views/SinglePorduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<SinglePorduct />} />
      </Routes>
    </div>
  );
}

export default App;

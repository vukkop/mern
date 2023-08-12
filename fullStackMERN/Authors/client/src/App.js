import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import DisplayLukeAPIWalker from "./components/DisplayLukeAPIWalker";
import FormLukeAPIWalker from "./components/FormLukeAPIWalker";
import Error from "./components/Error";

function App() {
  return (
    <div className="App container">
      <FormLukeAPIWalker />

      <Routes>
        <Route path="/:category/:id" element={<DisplayLukeAPIWalker />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

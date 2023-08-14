import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import { NewAuthor } from "./views/NewAuthor";
import EditAuthor from "./views/EditAuthor";

function App() {
  return (
    <div className="App container mt-3">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authors/new" element={<NewAuthor />} />
        <Route path="/authors/:id/edit" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;

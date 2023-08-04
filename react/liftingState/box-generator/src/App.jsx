import { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator';
import DisplayBoxGenerator from './components/DisplayBoxGenerator';

function App() {
  const [boxes, setBoxes] = useState([])

  const prevNewBoxes = (newBox) => {
    setBoxes((prev) => [...prev, newBox])
  }

  return (
    <div className="App">
      <BoxGenerator onCreate={prevNewBoxes} />
      <DisplayBoxGenerator boxesInfo={boxes} />
    </div>
  );
}

export default App;

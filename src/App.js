import { useState } from "react";
import './App.css';

function App() {

  const [dataComponent, setDataComponent] = useState(1);

  const changeState = () => {
    setDataComponent(dataComponent + 1)
  }

  return (
    <div className="App">
      <h1>Le state est {dataComponent} </h1>
      <button
      onClick={changeState}
      >Change State</button>
    </div>
  );
}

export default App;

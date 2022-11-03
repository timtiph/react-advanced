import {useState} from 'react'
import './App.css';

function App() {


  const [toggle, setToggle] = useState(true);


  const toggleFunc = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className="App">
        <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;

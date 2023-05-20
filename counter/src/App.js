
import './App.css';
import {useState} from "react"
function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <div><span>{count}</span></div>
        <div>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count-1)}>decrease</button>
        </div>
    </div>
  );
}

export default App;

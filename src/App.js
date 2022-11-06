import { useState } from "react";


 
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <h2>{count}</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          INCREMENT
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          DECREMENT
        </button>
        <button className="btn-r" onClick={() => setCount(0)}>
          RESET
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;

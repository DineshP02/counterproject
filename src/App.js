import React from "react";
import "./App.css";

import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const Add = () => {
    setCount(count + 1);
  };
  const Refresh = () => {
    setCount(0);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="first">
      <h1 className="h1">{count}</h1>
      <div className="container">
        <button className="Add" onClick={Add}>
          Add
        </button>
        <button className="Add" onClick={Refresh}>
          Refresh
        </button>
        <button className="Add" onClick={minus}>
          Minus
        </button>
      </div>
    </div>
  );
}

export default App;

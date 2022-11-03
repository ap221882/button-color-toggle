import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = color === "red" ? "blue" : "red";
  const handleButton = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <div>
      <button
        onClick={() => setColor(newButtonColor)}
        style={{ backgroundColor: color }}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input onChange={handleButton} type='checkbox' />
    </div>
  );
}

export default App;

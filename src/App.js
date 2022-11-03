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
        style={{ backgroundColor: isDisabled ? "gray" : color }}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        id='disable-button-checkbox'
        onChange={handleButton}
        type='checkbox'
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;

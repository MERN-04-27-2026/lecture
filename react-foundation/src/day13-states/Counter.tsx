import { useState } from "react";

export default function Counter() {
  // useState takes an initial value;
  // returns an array of 2
  // 1st is the state value
  // 2nd is the update/setState function
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    // pass the new state value
    setCount(count + 1);
    // will trigger a state update => triggers re-rendering
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

    // setCount(count + 1)

  console.log("rendered, count:", count);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
}

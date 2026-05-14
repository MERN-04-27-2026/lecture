import React, { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("12312312");

  const handleClick = () => {
    // console.log the input value
    // This is criminal ❌
    // you are almost never allowed to access DOM in react
    // console.log(document.getElementById("input").value);
  };

  return (
    <div>
      <label>
        Email:
        {/* two way data binding */}
        <input
          value={value}
          onChange={(event) => {
            // console.log(event.target.value);
            setValue(event.target.value);
          }}
        />
      </label>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}

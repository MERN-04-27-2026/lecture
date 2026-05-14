import React, { useState, type SubmitEvent } from "react";

export default function Select() {
  const [pet, setPet] = useState("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("pet", pet);
  };

  const options = [
    { text: "🐕 Dog", value: "dog" },
    { text: "🐱 Cat", value: "cat" },
    { text: "🐹 Hamster", value: "hamster" },
    { text: "🦜 Parrot", value: "parrot" },
    { text: "🕷️ Spider", value: "spider" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pet-select">Choose a pet:</label>
      <select
        id="pet-select"
        value={pet}
        onChange={(e) => setPet(e.target.value)}
      >
        {/* always have an empty option value  */}
        <option value="">--Please choose an option--</option>
        {options.map((option) => {
          return (
            // need to include a value to let select track
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>

      <br />
      <button>Click</button>
    </form>
  );
}

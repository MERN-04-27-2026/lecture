import React, { useState } from "react";

export default function UpdatingArray() {
  const [scores, setScores] = useState([1, 2, 3]);

  const addRandomScore = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    // This is how we add new item to array state
    setScores([...scores, newNumber]);
  };

  const deleteNumbers = () => {
    // const newScores = scores.filter((score) => score < 5);
    // setScores(newScores);

    // Delete from state array using filter
    setScores(scores.filter((score) => score < 5));
  };

  const multiplyNumbers = () => {
    // to update state array, use map
    setScores(scores.map((score) => score * 2));
  };

  const placeholder = () => {
    // ❌ because it tries to mutate the state
    scores.push(5);

    // ✅ this is legal, because it doesn't mutate the state
    scores.map((score) => {});
  };

  return (
    <div>
      <button onClick={addRandomScore}>Add a random score</button>
      <button onClick={deleteNumbers}>Delete numbers bigger than 5</button>
      <button onClick={multiplyNumbers}>Multiply numbers by 2</button>

      <div>{scores.join(", ")}</div>
    </div>
  );
}

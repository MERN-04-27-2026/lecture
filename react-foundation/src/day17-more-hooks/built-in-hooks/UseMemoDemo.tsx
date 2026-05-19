import { useMemo, useState } from "react";
import { useCounter } from "../custom-hooks/useCounter";

// this function is an expensive calculation
const getNthFib = (num: number) => {
  console.log("expensive function triggered");
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

export default function UseMemoDemo() {
  return (
    <div>
      {/* <Demo1 /> */}
      {/* <Demo2 /> */}
    </div>
  );
}

function Demo1() {
  const [bool, toggle] = useState(false);

  const { count, add } = useCounter();

  // every time the component re-render, everything in body runs again
  // so this expensive calculation is run again
  // this expensive only needs to run when count changes
  //   const fib = getNthFib(count);
  const fib = useMemo(() => {
    // the return of the callback, is also the useMemo's return value
    return getNthFib(count);
    // only when dep array changes, then we will re-calculate and return a new value;
  }, [count]);

  return (
    <div>
      <button onClick={() => toggle((prev) => !prev)}>
        {bool ? "true" : "false"}
      </button>
      <button onClick={add}>Click: {count}</button>
      <div>Nth fib: {fib}</div>
    </div>
  );
}

function Demo2() {
  const [people, setPeople] = useState([
    { id: crypto.randomUUID(), name: "John Doe", occupation: "Engineer" },
    { id: crypto.randomUUID(), name: "Jane Smith", occupation: "Designer" },
    { id: crypto.randomUUID(), name: "Bob Johnson", occupation: "Doctor" },
    { id: crypto.randomUUID(), name: "Alice Williams", occupation: "Engineer" },
    { id: crypto.randomUUID(), name: "Charlie Brown", occupation: "Designer" },
    { id: crypto.randomUUID(), name: "Diana Ross", occupation: "Doctor" },
    { id: crypto.randomUUID(), name: "Edward Chen", occupation: "Engineer" },
    { id: crypto.randomUUID(), name: "Fiona Garcia", occupation: "Designer" },
    { id: crypto.randomUUID(), name: "George Wilson", occupation: "Doctor" },
    { id: crypto.randomUUID(), name: "Hannah Lee", occupation: "Engineer" },
  ]);

  const [occupation, setOccupation] = useState("");

  // useMemo memoizes the return value of the function
  const filteredPeople = useMemo(() => {
    return people.filter((person) => {
      if (occupation === "") return true;
      return person.occupation === occupation;
    });
    // every time people or occupation changes, the output will be different
  }, [people, occupation]);

  return (
    <div>
      <h2>People List</h2>
      <select
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      >
        <option value="">Filter by occupation</option>
        {["Engineer", "Designer", "Doctor"].map((occ) => (
          <option key={occ}>{occ}</option>
        ))}
      </select>
      <ul>
        {filteredPeople.map((person) => (
          <li key={person.id}>
            {person.name}: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

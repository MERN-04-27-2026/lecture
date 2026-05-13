import React, { useState } from "react";

const initialPeople = [
  { id: crypto.randomUUID(), name: "John Doe", salary: 11000 },
  { id: crypto.randomUUID(), name: "Jane Smith", salary: 25000 },
  { id: crypto.randomUUID(), name: "Bob Johnson", salary: 32000 },
  { id: crypto.randomUUID(), name: "Alice Williams", salary: 19000 },
  { id: crypto.randomUUID(), name: "Charlie Brown", salary: 45000 },
];

export default function People() {
  const [people, setPeople] = useState(initialPeople);

  // use filter to delete
  const handleDelete = (id: string) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  // use map to update a specific element in an array
  const giveRaise = (id: string, raise: number) => {
    setPeople(
      people.map((person) => {
        if (person.id === id) {
          return { ...person, salary: person.salary + raise };
        }
        return person;
      }),
    );
  };

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <div>Name: {person.name}</div>
              <div>Salary: {person.salary}</div>
              <button onClick={() => handleDelete(person.id)}>Delete</button>
              <button onClick={() => giveRaise(person.id, 1000)}>
                Give a raise of 1000
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React, { type MouseEvent } from "react";

export default function EventHandlers() {
  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
  // this link tells you about event types
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    // console.log(event.target);
    console.log(event.target);
  };

  // if you don't need an argument for event handler, just leave it empty
  const handleClick2 = () => {};

  const handleAdd = (number: number) => {};

  return (
    <div>
      <h2>Buttons</h2>
      {/* these two are the same behavior */}
      <button onClick={handleClick}>btn 1</button>
      {/* btn 1 is simpler than btn 2*/}
      <button onClick={(event) => handleClick(event)}>btn 2</button>
      <button onClick={() => handleClick2()}>Add</button>
      <button onClick={() => handleAdd(2)}>Add 2</button>

      <button onMouseOver={(e) => {}}>Button</button>
    </div>
  );
}

// const callback = num => console.log(num)
// [].forEach(callback)

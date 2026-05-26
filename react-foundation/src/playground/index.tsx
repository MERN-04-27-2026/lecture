import React, { useId } from "react";

export default function Playground() {
  return (
    <div>
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
}

function Input() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input id={id} />
    </div>
  );
}

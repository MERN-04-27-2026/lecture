import { useState } from "react";

export default function ShowAndHide() {
  const [isShown, setIsShown] = useState(false);

  const toggle = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle Visibility</button>
      <div>Status: {isShown ? "Shown" : "hidden"}</div>
      {isShown && <ToBeHidden />}
    </div>
  );
}

function ToBeHidden() {
  return <div>Secrets</div>;
}

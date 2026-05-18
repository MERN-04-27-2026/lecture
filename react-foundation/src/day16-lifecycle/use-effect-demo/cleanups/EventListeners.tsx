import React, { useEffect } from "react";

// this component is like a game mode
// when it's rendered, every time you click the document
// it will log out the x,y coordinates of your click
export default function EventListeners() {
  useEffect(() => {
    // after component mounts, only for this component
    // we have this weird feature about DOM, and logging out coordinates

    const handleClick = (e) => {
      console.log("x:", e.clientX);
    };
    document.addEventListener("click", handleClick);

    // clean up: remove the event listener
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <div>EventListeners</div>;
}

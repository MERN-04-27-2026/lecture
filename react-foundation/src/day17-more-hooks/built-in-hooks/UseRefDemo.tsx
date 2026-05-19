import React, { useEffect, useRef, useState } from "react";
import useForceUpdate from "../custom-hooks/useForceUpdate";

export default function UseRefDemo() {
  return (
    <div>
      <h2>UseRefDemo</h2>
      {/* <UseCase1 /> */}
      {/* <UseCase2 /> */}
      <UseCase2SecondExample />
    </div>
  );
}

// have access to the DOM element's property
function UseCase1() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const handleClick = () => {
    const textArea = textareaRef.current;
    const { clientHeight, clientWidth } = textArea;
    console.log(clientHeight * clientWidth);
  };

  const goToTextArea = () => {
    textareaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <textarea ref={textareaRef} />
      <br />
      <button onClick={handleClick}>Display textarea' area</button>

      <div style={{ height: "1000px" }}></div>
      <button onClick={goToTextArea}>Go back to textarea</button>
    </div>
  );
}

// store a value that is not affected by state change or re-rendering
function UseCase2() {
  const rerender = useForceUpdate();

  // let's say we need a value that doesn't change
  // and also that doesn't need to be visible on the UI
  // if it needs to be on the UI, then use useState and useMemo
  const secretValue = useRef(Math.floor(Math.random() * 10) + 1);

  return (
    <div>
      <button onClick={rerender}>Re-render</button>
      <button onClick={() => alert(secretValue.current)}>Alert</button>
    </div>
  );
}

function UseCase2SecondExample() {
  const [count, setCount] = useState(10);
  // the value doesn't need to be on the UI, but it cannot be reset by re-render
  // so we can use useRef to create this value;
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    pause();
    setCount(10);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h3>Countdown: {count}</h3>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

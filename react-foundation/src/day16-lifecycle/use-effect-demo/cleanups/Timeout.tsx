import React, { useEffect, useState } from "react";

export default function Timeout() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
      setCount((prev) => {
        return prev + 1;
      });
    }, 500);

    return () => {
      return clearInterval(id);
    };
  }, []);

  return <div>Start time interval: {count}</div>;
}

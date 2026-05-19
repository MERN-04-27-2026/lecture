import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  const add = () => setCount((prev) => prev + 1);
  const minus = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return { count, add, minus, reset };
}

import { useState } from "react";

export default function useForceUpdate() {
  const [_, toggle] = useState(false);
  return () => {
    toggle((prev) => !prev);
  };
}

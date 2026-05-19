import PeopleList from "./PeopleList";
import useForceUpdate from "../custom-hooks/useForceUpdate";
import { useCallback } from "react";

const debounce = (fn: () => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay);
  };
};

export default function UseCallbackDemo() {
  const reRender = useForceUpdate();

  // every time component re-renders, everything in body re-runs
  // which means this function is recreated, so a new reference is created

  // use case 1:
  // memoizes the function itself, so the reference doesn't change
  const addPerson = useCallback(() => {
    // put your addPerson logic
    console.log("person added");
  }, []);

  // use case 2:
  // is when you need to preserve the closure of a higher order function
  const debouncedCallback = useCallback(
    debounce(() => console.log("say hi"), 1000),
    [],
  );

  return (
    <div>
      <button onClick={reRender}>Update component</button>
      <PeopleList handleAdd={addPerson} />
    </div>
  );
}

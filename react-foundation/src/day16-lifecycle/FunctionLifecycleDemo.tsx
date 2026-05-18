import { useEffect, useState } from "react";

export default function FunctionLifecycleDemo() {
  const [count, setCount] = useState(0);
  const [borderType, setBorderType] = useState<"dotted" | "solid">("solid");

  // 2 args, 1st is a callback, 2nd is dependency array
  // core: callback will run, when variables in dep array updates

  // if dependency is an empty array, that means dep will never change
  // thus callback will trigger once after mounting
  useEffect(() => {
    console.log("component mounts");

    // return a function
    // that becomes the clean up function
    // will be triggered before the component unmounts
    return () => {
      console.log("clean up function triggered");
    };
  }, []);

  // no dep array, will trigger every time after re-rendering
  useEffect(() => {
    console.log("component updated");
  });

  // count is in dep array, count update will trigger callback
  useEffect(() => {
    console.log("count updated");
  }, [count]);

  return (
    <div
      style={{
        border: `1px ${borderType} white`,
        width: "100px",
        margin: "20px auto",
      }}
    >
      <div>Count: {count}</div>

      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <br />
      <br />
      <button
        onClick={() =>
          setBorderType(borderType === "solid" ? "dotted" : "solid")
        }
      >
        Change border type
      </button>
    </div>
  );
}

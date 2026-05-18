import React, { useState } from "react";
import FunctionLifecycleDemo from "./FunctionLifecycleDemo";
import ClassLifecycleDemo from "./ClassLifecycleDemo";
import PostsList from "./use-effect-demo/PostsList";
import PaginatedPostsList from "./use-effect-demo/PaginatedPostsList";
import DataFetchingWithLoading from "./use-effect-demo/DataFetchingWithLoading";
import InifiniteRendering from "./use-effect-demo/InifiniteRendering";
import EventListeners from "./use-effect-demo/cleanups/EventListeners";
import Timeout from "./use-effect-demo/cleanups/Timeout";
import BitcoinLive from "./use-effect-demo/cleanups/Subscription";

export default function Day16() {
  const [shown, toggle] = useState(false);

  return (
    <div>
      <h1>Day 16 lifecycle</h1>

      <button onClick={() => toggle((prev) => !prev)}>Show / Hide</button>
      {/* {shown && <FunctionLifecycleDemo />} */}
      {/* {shown && <ClassLifecycleDemo />} */}
      {/* <VisibilityToggle display={shown ? "block" : "none"} /> */}

      {/* <PostsList /> */}
      {/* {shown && <DataFetchingWithLoading />} */}
      {/* <PaginatedPostsList /> */}
      {/* <InifiniteRendering /> */}
      {/* {shown && <Timeout />} */}
      {shown && <BitcoinLive />}
      {/* {shown && <EventListeners />} */}
    </div>
  );
}

function VisibilityToggle({ display }: { display: string }) {
  return <div style={{ display }}>Element</div>;
}

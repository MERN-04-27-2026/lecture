import React from "react";

interface PeopleListInterface {
  handleAdd: () => void;
}

function PeopleList({ handleAdd }: PeopleListInterface) {
  console.log("component re-rendered");

  return <div onClick={handleAdd}>people list</div>;
}

// prevent re-render if props and states don't change
export default React.memo(PeopleList);

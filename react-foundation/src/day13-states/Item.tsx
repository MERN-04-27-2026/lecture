import React from "react";

// if theme changes, then item re-render is unnecessary
function Item({ price }: { price: number }) {
  console.log("item re-renders");
  return <div>Item is ${price}</div>;
}

// React.memo prevents unnecessary rendering
// if neither props or states changes,
// component will not re-render
// performance improvement
export default React.memo(Item);

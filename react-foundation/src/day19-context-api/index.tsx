import React, { createContext } from "react";
import PropDrillingDemo from "./PropDrillingDemo";
import PropDrillingDemoSolution from "./PropDrillingDemoSolution";
import TodoApp from "./todo-app";

export default function Day19() {
  return (
    <div>
      <h1>Day 19 Context API</h1>
      {/* <PropDrillingDemo /> */}
      {/* <PropDrillingDemoSolution /> */}
      <TodoApp />
    </div>
  );
}



// Notes:

// the reason we don't use Context primarily for large apps
// 1. performance issue: every time the Provider value changes, all the consumers will re-render
// some of which are unnecessary
// 2. flexibility: Context API is very light, but too flexible, you can use any pattern you want
// in large app, that might be hard to keep the pattern consistent


// When do we use Context API then?
// what can be stored in the Context API?
// 1. client state / UI state
// global examples: theme, modal, toast
// local example: Tabs, Card, Form,

// 2. state that doesn't change very often
// example: auth



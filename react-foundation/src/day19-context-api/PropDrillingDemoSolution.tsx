import { createContext, useContext, useState } from "react";
import styles from "./simpleDemo.module.css";

// 1. create a Context
const CounterContext = createContext(null);
const ThemeContext = createContext(null);

type ThemeType = "light" | "dark";

export default function PropDrillingDemoSolution() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    // 2. wrap the components inside a Context Provider, then pass value prop
    <CounterContext.Provider value={{ count, setCount }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={styles.box} style={{ width: "500px" }}>
          <h2>Parent: {count}</h2>
          <A />
        </div>
      </ThemeContext.Provider>
    </CounterContext.Provider>
  );
}

interface AProps {}

function A() {
  return (
    <div className={styles.box}>
      a
      <B />
    </div>
  );
}

interface BProps {}
function B() {
  return (
    <div className={styles.box}>
      b
      <C />
    </div>
  );
}

interface CProps {}
function C() {
  // 3. use useContext to grab the values from the Context Provider
  // this return value of useContext is whatever your Provider's value prop is
  const { count, setCount } = useContext(CounterContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.box}>
      <div>C</div>
      <div>Count: {count}</div>
      <div>Theme: {theme}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  );
}

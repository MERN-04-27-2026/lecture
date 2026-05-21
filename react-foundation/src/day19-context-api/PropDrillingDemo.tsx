import { useState } from "react";
import styles from "./simpleDemo.module.css";

// prop drilling is when we have to pass props through many layers of deeply nested components
// it's an anti-pattern: hard to manage, messy code

type ThemeType = "light" | "dark";

export default function PropDrillingDemo() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    <div className={styles.box} style={{ width: "500px" }}>
      <h2>Parent</h2>
      <A count={count} theme={theme} />
    </div>
  );
}

interface AProps {
  count: number;
  theme: ThemeType;
}

// A and B don't even use these props, but they have to define it just for the sake of passing it down
function A({ count, theme }: AProps) {
  return (
    <div className={styles.box}>
      a
      <B count={count} theme={theme} />
    </div>
  );
}

interface BProps {
  count: number;
  theme: ThemeType;
}
function B({ count, theme }: BProps) {
  return (
    <div className={styles.box}>
      b
      <C count={count} theme={theme} />
    </div>
  );
}

interface CProps {
  count: number;
  theme: ThemeType;
}
function C({ count, theme }: CProps) {
  return (
    <div className={styles.box}>
      <div>C</div>
      <div>Count: {count}</div>
      <div>Theme: {theme}</div>
    </div>
  );
}

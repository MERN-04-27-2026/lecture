// this line of code is important and necessary in some environments
// you must include it
import React from "react";
// in this project, we don't need this ⬆️ because of the Vite config
interface ButtonInterface {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonInterface) {
  return <button>{children}</button>;
}

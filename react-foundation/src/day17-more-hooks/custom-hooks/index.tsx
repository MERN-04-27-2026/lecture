import { useCounter } from "./useCounter";

export default function CustomHooksDemo() {
  return (
    <div>
      <Counter1 />
      <Stock />
      <Cart />
    </div>
  );
}

function Counter1() {
  const { count, add, minus, reset } = useCounter();
  return (
    <div>
      <h2>Counter App</h2>
      <div>Count: {count}</div>
      <button onClick={add}> Add</button>
      <button onClick={minus}> Minus</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}
function Stock() {
  const { count, add, minus, reset } = useCounter();
  return (
    <div>
      <h2>Stock Purchase</h2>
      <div>Shares: {count}</div>
      <button onClick={add}> Add</button>
      <button onClick={minus}> Minus</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

function Cart() {
  const { count, add, minus, reset } = useCounter();
  return (
    <div>
      <h2>Cart Item</h2>

      <button onClick={add}> +</button>
      {count}
      <button onClick={minus}> - </button>
      <button onClick={reset}> Remove</button>
    </div>
  );
}

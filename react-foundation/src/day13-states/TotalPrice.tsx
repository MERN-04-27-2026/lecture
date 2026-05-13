import { useState } from "react";

export default function TotalPrice() {
  const [priceA, setPriceA] = useState(0);
  const [priceB, setPriceB] = useState(0);
  const [priceC, setPriceC] = useState(0);
  // this totalPrice is an unnecessary state
  // because it can be directly calculated
  const [totalPrice, setTotalPrice] = useState(0);

  // ⭐⭐⭐ use this instead
  // const totalPrice = priceA + priceB + priceC;

  const increasePriceA = () => {
    setPriceA(priceA + 100);
    setTotalPrice(totalPrice + 100);
  };

  const increasePriceB = () => {
    setPriceB(priceB + 100);
    setTotalPrice(totalPrice + 100);
  };

  const increasePriceC = () => {
    setPriceC(priceC + 100);
    setTotalPrice(totalPrice + 100);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div>Price A: {priceA}</div>
      <div>Price B: {priceB}</div>
      <div>Price C: {priceC}</div>
      <div>Total Price: {totalPrice}</div>

      <button onClick={increasePriceA}>Increase Price A</button>
      <button onClick={increasePriceB}>Increase Price B</button>
      <button onClick={increasePriceC}>Increase Price C</button>
    </div>
  );
}

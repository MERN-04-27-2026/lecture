import { useEffect, useState } from "react";

export default function BitcoinLive() {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // 1. Initialize the "subscription"
    const ws = new WebSocket("wss://ws-feed.exchange.coinbase.com");

    ws.onopen = () => {
      // Subscribe to a specific pair (e.g., BTC-USD)
      const subscribeMsg = JSON.stringify({
        type: "subscribe",
        product_ids: ["BTC-USD"],
        channels: ["ticker"],
      });
      ws.send(subscribeMsg);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.price) {
        console.log(data.price)
        setPrice(data.price);
      }
    };

    // 2. The CRITICAL Cleanup Function
    // Without this, the WebSocket stays open even if the component is gone!
    return () => {
      console.log("Cleaning up subscription...");
      ws.close();
    };
  }, []); // Only run on mount

  return <h1>BTC Price: ${price}</h1>;
}

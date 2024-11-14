import { useEffect, useState } from "react";

const TradeCoinFuncComponent = () => {
  const [btcPrice, setBtcPrice] = useState<number>(90000);

  useEffect(() => {
    console.log("mount");

    let timer = setInterval(() => {
      console.log("watch btc price");
      const newBtcPrice = 80000 + Math.floor(Math.random() * 20000);
      setBtcPrice(newBtcPrice);
    }, 2000); // Like componentDidMount

    return () => {
      console.log("unmount");
      clearInterval(timer); // Like componentWillUnmount
    };
  }, []);

  useEffect(() => {
    if (btcPrice < 85000) {
      console.log(`Buy BTC at ${btcPrice}`);
    }
  }, [btcPrice]); // Like componentDidUpdate

  return (
    <div>
      <h3>BTC Price: {btcPrice}</h3>
    </div>
  );
};

export default TradeCoinFuncComponent;

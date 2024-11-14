import { useState } from "react";
import TradeCoinFuncComponent from "./components/TradeCoinFuncComponent";

function App() {
  const [isTrading, setIsTrading] = useState<boolean>(false);

  return (
    <div className="App">
      <div>
        <button onClick={() => setIsTrading(!isTrading)}>
          {isTrading ? "End" : "Start"} Trade
        </button>
      </div>
      {isTrading && <TradeCoinFuncComponent />}
    </div>
  );
}

export default App;

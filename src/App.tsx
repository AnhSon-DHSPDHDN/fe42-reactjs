import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/count/countSlice";

function App() {
  // Lấy dữ liệu từ store
  const count = useSelector((state: RootState) => state.countReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(10));
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementByAmount}>Increment By 10</button>
      </div>
    </div>
  );
}

export default App;

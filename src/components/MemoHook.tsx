import { useState, useMemo, useCallback, useEffect } from "react";

const MemoHook = () => {
  const [count, setCount] = useState(0);

  const handleSomeThing = useCallback(() => {
    // Do some thing
  }, []);

  const computedData = useMemo(() => {
    let result = 0;

    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }

    console.log("handleComputedData");
    return result;
  }, [handleSomeThing]);

  console.log("rendering!!!");
  console.log(computedData, "computedData");

  return (
    <div>
      <h1>computedData: {computedData}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MemoHook;

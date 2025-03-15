import React from "react";
import useResultGamePlay from "../hooks/useResultGamePlay";

const GamePlay = () => {
  const { result, handleNewGame } = useResultGamePlay();

  return (
    <div>
      <h1>Tôm Cua Bầu</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <img src={result.data1} width={200} height={200} alt="" />
        <img src={result.data2} width={200} height={200} alt="" />
        <img src={result.data3} width={200} height={200} alt="" />
      </div>
      <button onClick={handleNewGame}>Xóc mới</button>
    </div>
  );
};

export default GamePlay;

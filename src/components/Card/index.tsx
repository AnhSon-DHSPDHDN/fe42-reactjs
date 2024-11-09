import React from "react";
import "./styles.scss";

type TProps = {
  color?: string;
};

const SquareComponent = ({ color }: TProps) => {
  return (
    <div
      className="card-container-square"
      style={{ backgroundColor: color }}
    ></div>
  );
};

const LabelComponent = ({ color }: TProps) => {
  return <span className="card-label">{color}</span>;
};

const Card = ({ color = "white" }: TProps) => {
  return (
    <div className="card-container">
      <SquareComponent color={color} />
      <LabelComponent color={color} />
    </div>
  );
};

const A = () => {
  return (
    <React.Fragment>
      <h1>a</h1>
      <h2>b</h2>
    </React.Fragment>
  );
};

export default Card;

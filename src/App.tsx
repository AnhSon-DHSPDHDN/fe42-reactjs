import { ChangeEvent, FormEvent, useState } from "react";

type TStudent = {
  name: string;
  age: number;
  class: string;
};

const students: TStudent[] = [
  {
    name: "SonTVA",
    age: 18,
    class: "FE42",
  },
  {
    name: "SonTVB",
    age: 19,
    class: "FE41",
  },
  {
    name: "SonTVC",
    age: 20,
    class: "FE40",
  },
];

function App() {
  const [count, setCount] = useState<number>(0);
  const [stepCount, setStepCount] = useState<number>(0);
  const [inputStep, setInputStep] = useState<string>("");

  const handleIncrement = () => {
    setCount(count + stepCount);
  };

  const handleDecrement = () => {
    setCount(count - stepCount);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isNaN(Number(inputStep))) {
      setStepCount(Number(inputStep));
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStep(e.target.value);
  };

  const renderStudents = () => {
    return students.map((studentItem, index) => {
      return (
        <li key={index}>
          {studentItem.name} - {studentItem.age} Tuoi - {studentItem.class}
        </li>
      );
    });
  };

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input value={inputStep} onChange={handleChangeInput} />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <ul>{renderStudents()}</ul>
    </div>
  );
}

export default App;

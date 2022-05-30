import { useState } from "react";
import "./App.css";

export default function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState(0);

  // console.log(eval(equation));

  function getValue(event) {
    setEquation(event.target.value);
    setResult(eval(event.target.value));
  }

  function getResult() {
    console.log(result);
  }

  return (
    <div className="calculator-container">
      <input
        className="calculator-screen"
        pattern="[0-9]+"
        type="type"
        onChange={getValue}
      ></input>
      <ol className="calculator-buttons">
        <li className="">9</li>
        <li className="">8</li>
        <li className="">7</li>
        <li className="">6</li>
        <li className="">5</li>
        <li className="">4</li>
        <li className="">3</li>
        <li className="">2</li>
        <li className="">1</li>
        <li className="">0</li>
        <li className="">.</li>
        <li className="" onClick={() => getResult()}>
          =
        </li>
      </ol>
    </div>
  );
}

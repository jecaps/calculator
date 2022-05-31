import { useState } from "react";
// import "./App.css";

export default function App() {
  return (
    <div className="calculator-grid grid mt-8 grid-cols-4 gap-0.5">
      <div className="calculator-screen col-span-full">
        <div className="equation bg-screen text-white">ghrh</div>
        <div className="result bg-screen text-whiter">fghfdg</div>
      </div>

      <button className="span-two col-span-2 bg-button">AC</button>
      <button className="span-two col-span-2 bg-button">DEL</button>
      <button className="bg-button">(</button>
      <button className="bg-button">)</button>
      <button className="bg-button">exp</button>
      <button className="bg-button">÷</button>
      <button className="bg-button">7</button>
      <button className="bg-button">8</button>
      <button className="bg-button">9</button>
      <button className="bg-button">×</button>
      <button className="bg-button">4</button>
      <button className="bg-button">5</button>
      <button className="bg-button">6</button>
      <button className="bg-button">+</button>
      <button className="bg-button">1</button>
      <button className="bg-button">2</button>
      <button className="bg-button">3</button>
      <button className="bg-button">-</button>
      <button className="bg-button">.</button>
      <button className="bg-button">0</button>
      <button className="span-two col-span-2 bg-button">=</button>
    </div>
  );
}

// const [equation, setEquation] = useState("");
// const [result, setResult] = useState(0);

// console.log(equation);

// function getValue(event) {
//   setEquation(event.target.value);
//   setResult(eval(event.target.value));
// }

// function getResult() {
//   console.log(result);
// }

// function keySelector() {
//   let val = document.querySelector(".keys").textContent;
//   document.getElementsByClassName("calculator-screen").innerHTML = val;
//   console.log(val);
// }

// return (
//   <div className="calculator-container">
//     <input
//       className="calculator-screen"
//       pattern="[0-9]+"
//       type="type"
//       onChange={getValue}
//     ></input>
//     <ol className="calculator-buttons">
//       <li className="keys" onClick={keySelector}>
//         9
//       </li>
//       <li className="keys" onClick={keySelector}>
//         8
//       </li>
//       <li className="keys" onClick={keySelector}>
//         7
//       </li>
//       <li className="keys" onClick={keySelector}>
//         6
//       </li>
//       <li className="keys" onClick={keySelector}>
//         5
//       </li>
//       <li className="keys" onClick={keySelector}>
//         4
//       </li>
//       <li className="keys" onClick={keySelector}>
//         3
//       </li>
//       <li className="keys" onClick={keySelector}>
//         2
//       </li>
//       <li className="keys" onClick={keySelector}>
//         1
//       </li>
//       <li className="keys" onClick={keySelector}>
//         0
//       </li>
//       <li className="keys" onClick={keySelector}>
//         .
//       </li>
//       <li className="" onClick={() => getResult()}>
//         =
//       </li>
//     </ol>
//   </div>
// );

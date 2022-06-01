// import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="calculator-grid grid mt-8 grid-cols-4 grid-rows-7 justify-center">
      <div className="calculator-screen col-span-full bg-screen flex flex-col items-end justify-around p-3 break-all">
        <div className="equation text-white text-1.5">576465 +</div>
        <div className="result text-white-pure text-2.5">132135466541</div>
      </div>
      <button className="span-two ">AC</button>
      <button className="span-two ">DEL</button>
      <button className="">(</button>
      <button className="">)</button>
      <button className="">exp</button>
      <button className="">÷</button>
      <button className="">7</button>
      <button className="">8</button>
      <button className="">9</button>
      <button className="">×</button>
      <button className="">4</button>
      <button className="">5</button>
      <button className="">6</button>
      <button className="">+</button>
      <button className="">1</button>
      <button className="">2</button>
      <button className="">3</button>
      <button className="">-</button>
      <button className="">.</button>
      <button className="">0</button>
      <button className="span-two">=</button>
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

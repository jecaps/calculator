import { useState } from "react";
import Button from "./Button";
import data from "./data";
import "./App.css";

export default function App() {
  const [formula, setFormula] = useState("");
  const [screenFormula, setScreenFormula] = useState("");
  const [result, setResult] = useState(0);

  function btnSelector(button) {
    let btnText = document.querySelector(button).innerHTML;
    switch (btnText) {
      case "-":
        setScreenFormula(`${screenFormula} ${btnText} `);
        setFormula(`${formula} ${btnText} `);
        break;
      case "+":
        setScreenFormula(`${screenFormula} ${btnText} `);
        setFormula(`${formula} ${btnText} `);
        break;
      case "÷":
        setScreenFormula(`${screenFormula} ${btnText} `);
        setFormula(`${formula} / `);
        break;
      case "×":
        setScreenFormula(`${screenFormula} ${btnText} `);
        setFormula(`${formula} * `);
        break;
      case "=":
        setResult(eval(formula).toLocaleString("en"));
        break;
      case "EXP":
        setScreenFormula(`${screenFormula} ^ `);
        setFormula(`${formula} ** `);
        break;
      case "AC":
        setScreenFormula("");
        setFormula("");
        setResult(0);
        break;
      case "DEL":
        setScreenFormula(screenFormula.slice(0, -1));
        setFormula(formula.slice(0, -1));
        break;
      default:
        setScreenFormula(`${screenFormula}${btnText}`);
        setFormula(`${formula}${btnText}`);
    }
  }

  const btnEl = data.map((btn) => {
    return (
      <Button
        key={Math.random() * 1000}
        text={btn.text}
        classname={btn.classname}
        btnSelector={() => btnSelector(`.${btn.classname}`)}
      />
    );
  });

  return (
    <div className="calculator-grid grid mt-8 grid-cols-4 grid-rows-7 justify-center">
      <div className="calculator-screen col-span-full bg-screen flex flex-col items-end justify-around p-3 break-all">
        <div className="equation text-white text-1.5">{screenFormula}</div>
        <div className="result text-white-pure text-2.5">{result}</div>
      </div>

      {btnEl}
    </div>
  );
}

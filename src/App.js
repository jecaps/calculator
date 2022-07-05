import { useState } from "react";
import Button from "./Button";
import data from "./data";

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
        // setScreenFormula("");
        setFormula("");
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
    <div className="grid mt-8 grid-cols-4 grid-rows-7 justify-center w-[44rem] m-auto">
      <div className="col-span-full bg-screen flex flex-col items-end justify-around px-6 break-all">
        <div className="equation text-white text-2">{screenFormula}</div>
        <div className="result text-white-pure text-3.5">{result}</div>
      </div>
      {btnEl}
    </div>
  );
}

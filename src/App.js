import { useState } from "react";
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

  function getResult() {
    setResult(eval(formula));
  }

  return (
    <div className="calculator-grid grid mt-8 grid-cols-4 grid-rows-7 justify-center">
      <div className="calculator-screen col-span-full bg-screen flex flex-col items-end justify-around p-3 break-all">
        <div className="equation text-white text-1.5">{screenFormula}</div>
        <div className="result text-white-pure text-2.5">{result}</div>
      </div>

      <button className="span-two clear" onClick={() => btnSelector(".clear")}>
        AC
      </button>
      <button
        className="span-two delete"
        onClick={() => btnSelector(".delete")}
      >
        DEL
      </button>
      <button
        className="open-parenthesis"
        onClick={() => btnSelector(".open-parenthesis")}
      >
        (
      </button>
      <button
        className="close-parenthesis"
        onClick={() => btnSelector(".close-parenthesis")}
      >
        )
      </button>
      <button className="exponent" onClick={() => btnSelector(".exponent")}>
        EXP
      </button>
      <button className="divide" onClick={() => btnSelector(".divide")}>
        ÷
      </button>
      <button className="seven" onClick={() => btnSelector(".seven")}>
        7
      </button>
      <button className="eight" onClick={() => btnSelector(".eight")}>
        8
      </button>
      <button className="nine" onClick={() => btnSelector(".nine")}>
        9
      </button>
      <button className="mutliply" onClick={() => btnSelector(".mutliply")}>
        ×
      </button>
      <button className="four" onClick={() => btnSelector(".four")}>
        4
      </button>
      <button className="five" onClick={() => btnSelector(".five")}>
        5
      </button>
      <button className="six" onClick={() => btnSelector(".six")}>
        6
      </button>
      <button className="add" onClick={() => btnSelector(".add")}>
        +
      </button>
      <button className="one" onClick={() => btnSelector(".one")}>
        1
      </button>
      <button className="two" onClick={() => btnSelector(".two")}>
        2
      </button>
      <button className="three" onClick={() => btnSelector(".three")}>
        3
      </button>
      <button className="minus" onClick={() => btnSelector(".minus")}>
        -
      </button>
      <button className="decimal" onClick={() => btnSelector(".decimal")}>
        .
      </button>
      <button className="zero" onClick={() => btnSelector(".zero")}>
        0
      </button>
      <button className="span-two equals" onClick={() => getResult()}>
        =
      </button>
    </div>
  );
}

import "./App.css";

export default function App() {
  return (
    <div className="calculator-container">
      <input className="calculator-screen" type="text"></input>
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
        <li className="">=</li>
      </ol>
    </div>
  );
}

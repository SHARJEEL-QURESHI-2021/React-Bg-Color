import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function FavoriteColor() {
  const [color, setColor] = useState("blue");
  return (
    <>
      <h1 style={{color: color}}>My favorite color is {color}!</h1>
      <button
        type="button" id="btnR"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button" id="btnY"
        onClick={() => setColor("yellow")}
      >Yellow</button>
      <button
        type="button" id="btnG"
        onClick={() => setColor("green")}
      >Green</button>
      <button
        type="button" id="btnB"
        onClick={() => setColor("black")}
      >Black</button>
      <button
        type="button" id="btnO"
        onClick={() => setColor("orange")}
      >Orange</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

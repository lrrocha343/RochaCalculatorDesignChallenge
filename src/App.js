import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, result.length -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
      

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">Clear</button>
          <button className="highlight" onClick={backspace} id="backspace">C</button>
          <button className="highlight" name="/" onClick={handleClick} id="operators">&divide;</button>
          <button name="7" onClick={handleClick} id="button">7</button>
          <button name="8" onClick={handleClick} id="button">8</button>
          <button name="9" onClick={handleClick} id="button">9</button>
          <button className="highlight" name="*" onClick={handleClick} id="operators">&times;</button>
          <button name="4" onClick={handleClick} id="button">4</button>
          <button name="5" onClick={handleClick} id="button">5</button>
          <button name="6" onClick={handleClick} id="button">6</button>
          <button className="highlight" name="-" onClick={handleClick} id="operators">&ndash;</button>
          <button name="1" onClick={handleClick} id="button">1</button>
          <button name="2" onClick={handleClick} id="button">2</button>
          <button name="3" onClick={handleClick} id="button">3</button>
          <button className="highlight" name="+" onClick={handleClick} id="operators">+</button>
          <button name="0" onClick={handleClick} id="button">0</button>
          <button name="." onClick={handleClick} id="button">.</button>
          <button className="highlight" onClick={calculate} id="result">=</button>
        </div>
      </div>
    </>
  );
}

export default App;


import React, { useState } from 'react';
import { evaluate ,sqrt} from 'mathjs';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult('Error');
    }
  };
  const handleSquare = () => {
    try {
      setResult(evaluate(`${input}^2`));
    } catch (error) {
      setResult('Error');
    }
  };
  const handleSquareRoot = () => {
    try {
      setResult(sqrt(evaluate(input)));
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <div className="calculator">
      <div className="display">
        {input || '0'}
        {result !== null && <div className="result">= {result}</div>}
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleSquare}>x²</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleSquareRoot}>√</button>
      </div>
    </div>
  );
};

export default Calculator;

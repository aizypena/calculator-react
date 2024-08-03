import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import './calcu.css';

export default function App() {
  const [input, setInput] = useState(''); // State to track current input
  const [result, setResult] = useState(''); // State to track the result

  // Handle button click
  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput(''); // Clear input
      setResult(''); // Clear result
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1)); // Remove last character
    } else if (value === '=') {
      calculateResult(); // Evaluate expression
    } else if (value === '+/-') {
      toggleSign(); // Toggle sign of the number
    } else {
      setInput(input + value); // Append clicked value to input
    }
  };

  // Calculate the result from the input expression
  const calculateResult = () => {
    try {
      // Replace "x" and "÷" with "*" and "/" for evaluation
      const expression = input.replace(/x/g, '*').replace(/÷/g, '/');
      // Evaluate the expression using eval (handle with care)
      const evalResult = eval(expression);
      setResult(evalResult.toString()); // Update result state
    } catch (error) {
      setResult('Error'); // Set error if evaluation fails
    }
  };

  // Toggle sign of the current input number
  const toggleSign = () => {
    if (input) {
      if (input.startsWith('-')) {
        setInput(input.slice(1)); // Remove '-' if it exists
      } else {
        setInput('-' + input); // Add '-' if it doesn't exist
      }
    }
  };

  return (
    <div className='mainContainer'>
      <div className='calcu-container'>
        <div id='result-container'>
          <p className='history no-margin text-end'>{input}</p>
          <p className='result no-margin text-end'>{result}</p> {/* Display current result */}
        </div>
        <Button className='numBtn otherColor' onClick={() => handleButtonClick('C')}>C</Button>
        <Button className='numBtn otherColor' onClick={() => handleButtonClick('+/-')}>+/-</Button>
        <Button className='numBtn otherColor' onClick={() => handleButtonClick('%')}>%</Button>
        <Button className='numBtn operatorColor' onClick={() => handleButtonClick('÷')}>÷</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('7')}>7</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('8')}>8</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('9')}>9</Button>
        <Button className='numBtn operatorColor' onClick={() => handleButtonClick('x')}>x</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('4')}>4</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('5')}>5</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('6')}>6</Button>
        <Button className='numBtn operatorColor' onClick={() => handleButtonClick('-')}>-</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('1')}>1</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('2')}>2</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('3')}>3</Button>
        <Button className='numBtn operatorColor' onClick={() => handleButtonClick('+')}>+</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('0')}>0</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('.')}>.</Button>
        <Button className='numBtn numColor' onClick={() => handleButtonClick('DEL')}>
          <FontAwesomeIcon icon={faDeleteLeft} style={{ color: "#ffffff" }} />
        </Button>
        <Button className='numBtn operatorColor' onClick={() => handleButtonClick('=')}>=</Button>
      </div>
      <div className='name-container' style={{color: "#fff", marginTop: "20px"}}>
        <p>&copy; Julyza Peña</p>
      </div>
    </div>
  );
}

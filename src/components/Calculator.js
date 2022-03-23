import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';
import '../assets/App.css';

const calculator = () => {
  const [displayed, setDisplayed] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const onClick = (e) => {
    setDisplayed((state) => calculate(state, e.target.innerText));
  };
  const { total, next, operation } = displayed;

  return (
    <div className="calc-container">
      <h3>{'Let\'s do some Math!'}</h3>
      <div className="calculator">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <Button click={onClick} />
      </div>
    </div>
  );
};

export default calculator;

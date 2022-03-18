import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';
import '../App.css';

const calculator = () => {
  const [displayed, setDisplayed] = useState({ total: 0, next: '', operation: '' });

  const onClick = (e) => {
    setDisplayed((state) => calculate(state, e.target.innerText));
  };
  const { total, next, operation } = displayed;

  return (
    <div className="calculator">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <Button click={onClick} />
    </div>
  );
};

export default calculator;

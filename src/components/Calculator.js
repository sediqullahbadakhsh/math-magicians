import react from 'react';
import '../App.css';

class Calculator extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="row"><input className="input" value="0" /></div>
        <div className="row">
          <p className="colr-grey item">AC</p>
          <p className="colr-grey item">+/-</p>
          <p className="colr-grey item">%</p>
          <p className="colr-orng item">+</p>
        </div>
        <div className="row">
          <p className="colr-grey item">7</p>
          <p className="colr-grey item">8</p>
          <p className="colr-grey item">9</p>
          <p className="colr-orng item">x</p>
        </div>
        <div className="row">
          <p className="colr-grey item">4</p>
          <p className="colr-grey item">5/-</p>
          <p className="colr-grey item">6</p>
          <p className="colr-orng item">-</p>
        </div>
        <div className="row">
          <p className="colr-grey item">1</p>
          <p className="colr-grey item">2</p>
          <p className="colr-grey item">3</p>
          <p className="colr-orng item">+</p>
        </div>
        <div className="last row">
          <p className="colr-grey item-zero">0</p>
          <p className="colr-grey item">.</p>
          <p className="colr-orng item">=</p>
        </div>
      </div>
    );
  }
}

export default Calculator;

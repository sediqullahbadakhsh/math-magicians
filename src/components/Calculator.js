import react from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';
import '../App.css';

export default class Calculator extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  onClick = (e) => {
    this.setState((state) => calculate(state, e.target.innerText));
  };

  render() {
    const btn = {
      value: ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', ' ='],
    };
    return (
      <div className="calculator">
        <div className="result">
          {this.state.total}
          {this.state.operation}
          {this.state.next}
        </div>
        <Buttons btn={btn} click={this.onClick} />
      </div>
    );
  }
}

import React, { Component } from "react";
import "../counter.css";

export class counterApp extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  resetCounter = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div className="counter">
        <div>
          <h1>Counter App</h1>
        </div>
        <div className="current">
          <span>{this.state.counter}</span>
        </div>
        <div className="container">
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increase}>+</button>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }
}

export default counterApp;

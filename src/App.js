import React from "react";
import * as Constants from "./objNumSym.js";
import removalHistory from "./removalHistory.js";
import "./styles/App.css";
//import TokeNparse from "./TokeNparse.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opID: "",
      value: [],
      input: [0],
      count: 0,
    };

    this.appendDecimalIf = this.appendDecimalIf.bind(this);
    this.appendZeroIf = this.appendZeroIf.bind(this);
    this.appendNumIf = this.appendNumIf.bind(this);
    this.appendOperator = this.appendOperator.bind(this);
    this.clear = this.clear.bind(this);
    this.evaluateExpression = this.evaluateExpression.bind(this);
  }

  evaluateExpression() {}

  appendNumIf(e) {
    if (this.state.input[0] !== undefined) {
      let zeroAndDecimal = this.state.input.map((val) => val);
      return zeroAndDecimal[0] === 0 && zeroAndDecimal[1] !== "."
        ? this.setState({ input: [Constants[e.target.id].value] })
        : this.setState({
            input: [...this.state.input, Constants[e.target.id].value],
          });
    }
  }

  appendOperator(e) {
    const lastInputValue = this.state.input[this.state.input.length - 1];
    Constants.decimal.toggle = "APPEND_ON";

    if (Constants[e.target.id].value === "-") {
      if (this.state.input.length === 1 && this.state.input[0] === 0) {
        this.setState({
          input: [Constants[e.target.id].value],
          count: this.state.count + 1,
        });

        return Constants[e.target.id].inputCount.push(this.state.count);
      } else if (lastInputValue !== "-") {
        this.setState({
          input: [...this.state.input, Constants[e.target.id].value],
          count: this.state.count + 1,
        });

        Constants[e.target.id].expressions.push(this.state.input);
        Constants[e.target.id].inputCount.push(this.state.count);
        return console.log("Subtraction:", Constants.subtract.expressions);
      }
    }

    if (typeof lastInputValue === "number") {
      this.setState({
        opID: Constants[e.target.id],
        value: [...this.state.input, Constants[e.target.id].value],
        input: [0],
        count: this.state.count + 1,
      });

      Constants[e.target.id].expressions.push(this.state.value);
      Constants[e.target.id].inputCount.push(this.state.count);

      return console.log(
        Constants[e.target.id],
        Constants[e.target.id].expressions
      );
    } else if (lastInputValue !== "-") {
      let removeLastExpression = Constants[this.state.opID].expressions.pop();
      let lastOperator = this.state.value.pop();
      let removeLastConstants = [this.state.opID].inputCount.pop();

      removalHistory(removeLastExpression, lastOperator, removeLastConstants);

      return this.setState({
        opId: Constants[e.target.id].value,
        history: [this.state.history, removalHistory],
        value: [...this.state.input, Constants[e.target.id].value],
        input: [0],
        count: this.state.count + 1,
      });
    }
  }

  appendZeroIf() {
    if (
      this.state.input.length > 1 ||
      (this.state.input.length === 1 && this.state.input[0] !== 0)
    ) {
      return this.setState({
        input: [...this.state.input, Constants.zero.value],
      });
    }
  }

  appendDecimalIf() {
    if (Constants.decimal.toggle === "APPEND_ON") {
      let lastInputValue = this.state.input[this.state.input.length - 1];
      if (typeof lastInputValue !== "number") {
        this.setState({
          input: [...this.state.input, 0, Constants.decimal.value],
        });
      } else {
        this.setState({
          input: [...this.state.input, Constants.decimal.value],
        });
      }
      return (Constants.decimal.toggle = "APPEND_OFF");
    }
  }

  clear(e) {
   return this.state({
      opID: "",
      value: [],
      input: [0],
      count: 0,
   })
  }

  render() {
    return (
      <div>
        <div>
          <div>{/* from working test <Utils/> */}</div>
          <h3 id="display">{this.state.input}</h3>
          <h3>{this.state.result}</h3>
          This is where constants show: {Constants.one.value}
        </div>
        <div>
          <button
            className={Constants.clear.name}
            id={Constants.clear.id}
            onClick={this.clear}
          >
            {Constants.clear.value}
          </button>
          <button
            className={Constants.divide.name}
            id={Constants.divide.id}
            onClick={this.appendOperator}
          >
            {Constants.divide.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.seven.objType}
            id={Constants.seven.id}
            onClick={this.appendNumIf}
          >
            {Constants.seven.value}
          </button>
          <button
            className={Constants.eight.objType}
            id={Constants.eight.id}
            onClick={this.appendNumIf}
          >
            {Constants.eight.value}
          </button>
          <button
            className={Constants.nine.objType}
            id={Constants.nine.id}
            onClick={this.appendNumIf}
          >
            {Constants.nine.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.four.objType}
            id={Constants.four.id}
            onClick={this.appendNumIf}
          >
            {Constants.four.value}
          </button>
          <button
            className={Constants.five.objType}
            id={Constants.five.id}
            onClick={this.appendNumIf}
          >
            {Constants.five.value}
          </button>
          <button
            className={Constants.six.objType}
            id={Constants.six.id}
            onClick={this.appendNumIf}
          >
            {Constants.six.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.one.objType}
            id={Constants.one.id}
            onClick={this.appendNumIf}
          >
            {Constants.one.value}
          </button>
          <button
            className={Constants.two.objType}
            id={Constants.two.id}
            onClick={this.appendNumIf}
          >
            {Constants.two.value}
          </button>
          <button
            className={Constants.three.objType}
            id={Constants.three.id}
            onClick={this.appendNumIf}
          >
            {Constants.three.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.zero.name}
            id={Constants.zero.id}
            onClick={this.appendZeroIf}
          >
            {Constants.zero.value}
          </button>
          <button
            className={Constants.decimal.name}
            id={Constants.decimal.id}
            onClick={this.appendDecimalIf}
          >
            {Constants.decimal.value}
          </button>
        </div>
        <div id="arithmetic-operators">
          <button
            name={Constants.multiply.name}
            id={Constants.multiply.id}
            onClick={this.appendOperator}
          >
            {Constants.multiply.value}
          </button>
          <button
            name={Constants.subtract.name}
            id={Constants.subtract.id}
            onClick={this.appendOperator}
          >
            {Constants.subtract.value}
          </button>
          <button
            name={Constants.add.name}
            id={Constants.add.id}
            onClick={this.appendOperator}
          >
            {Constants.add.value}
          </button>
          <button
            className={Constants.equals.name}
            id={Constants.equals.id}
            onClick={this.evaluateExpression}
          >
            {Constants.equals.value}
          </button>
        </div>
      </div>
    );
  }
}

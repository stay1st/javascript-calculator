import React from "react";
import * as Constants from "./objNumSym.js";
import "./styles/App.css";
import { evaluate } from "mathjs";

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
  
  evaluateExpression() {
    if (typeof this.state.input[this.state.input.length - 1] !== "number") {
      let input = this.state.input
      delete input.pop()
      this.setState({
        value: [...input],
        input: [...input]
      })
    }
    const inputValsToString = this.state.input.join('');
    const evaluatedInputNumber = evaluate(inputValsToString);
    this.setState({
      value: [...this.state.input, "=", evaluatedInputNumber],
      input: [evaluatedInputNumber],
    });
  }

  appendNumIf(e) {
    if (this.state.input[0] !== undefined) {
      const zeroAndDecimal = this.state.input.map((val) => val);
      return zeroAndDecimal[0] === 0 && zeroAndDecimal[1] !== "."
        ? this.setState({ input: [Constants[e.target.id].value] })
        : this.setState({
            input: [...this.state.input, Constants[e.target.id].value],
          });
    }
  }

  appendOperator(e) {
    const constID = Constants[e.target.id];
    const constVal = Constants[e.target.id].value;

    const input = this.state.input;
    const lastInputCharacter = this.state.input[this.state.input.length - 1];

    /* If Number(0) append this operator '-' only. Toggle Decimal ON */
    if (input[0] === 0 && input.length - 1 === 0) {
      if (constVal === "-") {
        this.setState({
          input: [constVal],
        });
        return (Constants.decimal.toggle = "APPEND_ON");
      }
      const append = false;
      return append;
    }

    if (this.state.value !== undefined) {
      if (this.state.value[this.state.value.length - 2] === "=") {
        this.setState({
          value: [this.state.input, constVal],
        });
      }
    }

    /* if last inputted character is a Number:
    Spread the input add constVal to the array*/
    if (lastInputCharacter === "number") {
      console.log("lastInputCharacter 68:", lastInputCharacter);
      this.setState({
        opID: constID,
        value: [...input, constVal],
        input: [...input, constVal],
        count: this.state.count + 1,
      });
      return (Constants.decimal.toggle = "APPEND_ON");
    }

    /* If target is a '-' subtract operator. Append only if there isn't a "." and 
    the last input was a Number or other operator. Toggle Decimal ON */

    if (constVal === "-" && 1 <= input.length - 1) {
      if (
        typeof lastInputCharacter === "number" ||
        lastInputCharacter !== "-"
      ) {
        /* if a decimal exists we only can append a number. 
        Also if '-' already exists we can't double up. */
        if (lastInputCharacter === ".") {
          const append = false;
          return append;
        } else {
          /* set state but don't push to operator. Due to minus & negative integer reasons */
          this.setState({
            opID: constID,
            value: [...input, "-"],
            input: [...input, "-"],
            count: this.state.count + 1,
          });
          return (Constants.decimal.toggle = "APPEND_ON");
        }
      }
    }

    /* if input has >= 2 ( + || * || / ) will set state appending to `input` 
    and 'value', or replace last char in input. Thereafter, Toggle Decimal ON'*/

    if (1 <= input.length && typeof lastInputCharacter === "number") {
      if (lastInputCharacter !== ".") {
        this.setState({
          opID: constID,
          value: [...input, constVal],
          input: [...input, constVal],
          count: this.state.count + 1,
        });
        return (Constants.decimal.toggle = "APPEND_ON");
      }
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
      let prevStateInput = this.state.input[this.state.input.length - 1];
      if (typeof prevStateInput !== "number") {
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
    return this.setState({
      opID: "",
      value: [],
      input: [0],
      count: 0,
    });
  }

  render() {
    return (
      <div>
        <div>
        <div id="display">
            <h4>{this.state.value}</h4>
            <h3>{this.state.input}</h3>
          </div>
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
          <button
            name={Constants.multiply.name}
            id={Constants.multiply.id}
            onClick={this.appendOperator}
          >
            x
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
          <button
            name={Constants.subtract.name}
            id={Constants.subtract.id}
            onClick={this.appendOperator}
          >
            {Constants.subtract.value}
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
          <button
            name={Constants.add.name}
            id={Constants.add.id}
            onClick={this.appendOperator}
          >
            {Constants.add.value}
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

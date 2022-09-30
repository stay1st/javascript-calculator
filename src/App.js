import React from "react";
import * as Constants from "./objNumSym.js";
import { Parser, Tokens, User } from "./Tokens";
import { Evaluator } from "./Tokens";
import "./styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [0],
    };

    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleArithmetic = this.handleArithmetic.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.evaluateEquals = this.evaluateEquals.bind(this);
  }

  evaluateEquals() {

    let inputJoined = this.state.input.join("");
    const tokened = Tokens.getInstance();
    const tokens = tokened.tokening(inputJoined);
    let x = new Parser(tokens)
    let xparse = x.parse(x.instance)
    let bin = new User(xparse)
    console.log('%c`x` new Parser App.js x:','color: orange:', x)
    console.log('%c `xparse` x.parser App.js xparse:', 'color: orange;', xparse)
    console.log('%c `bin` new User App.js', 'color: orange;', bin)
    
    
  }

  handleArithmetic(e) {
    let lastInput = this.state.input.slice(-1);
    if (typeof lastInput[0] === "number") {
      if (this.state.input.length - 1 === 0 && lastInput[0] === 0) return null;
      this.setState({
        input: [...this.state.input, Constants[e.target.id].value],
      });
    }
    Constants.decimal.toggle = "APPEND_ON";
  }

  handleZero() {
    if (
      this.state.input.length > 1 ||
      (this.state.input.length === 1 && this.state.input[0] !== 0)
    ) {
      return this.setState({
        input: [...this.state.input, Constants.zero.value],
      });
    }
  }

  handleDecimal() {
    if (Constants.decimal.toggle === "APPEND_ON") {
      let lastInput = this.state.input.slice(-1);
      if (typeof lastInput[0] !== "number") {
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

  handleClick(e) {
    console.log(
      "%cConstants value:",
      "color: yellow;",
      Constants[e.target.id].value
    );

    switch (e.target.className) {
      case "number":
        if (this.state.input[0] === 0 && this.state.input[1] !== ".") {
          return this.setState({ input: [Constants[e.target.id].value] });
        }
        return this.setState({
          input: [...this.state.input, Constants[e.target.id].value],
        });
      case "Decimal":
        return this.setState({
          input: [...this.state.input, Constants[e.target.id].value],
        });
      case "ClearIt":
        return this.setState({ input: [0] });
      case "Equals":
        return this.evaluateEquals(e);
      default:
        return console.error(
          '"handleClick" has no className matches for `#' +
            e.target.id +
            "` check objNumSym.js"
        );
    }
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
            onClick={this.handleClick}
          >
            {Constants.clear.value}
          </button>
          <button
            name={Constants.divide.name}
            id={Constants.divide.id}
            onClick={this.handleArithmetic}
          >
            {Constants.divide.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.seven.objType}
            id={Constants.seven.id}
            onClick={this.handleClick}
          >
            {Constants.seven.value}
          </button>
          <button
            className={Constants.eight.objType}
            id={Constants.eight.id}
            onClick={this.handleClick}
          >
            {Constants.eight.value}
          </button>
          <button
            className={Constants.nine.objType}
            id={Constants.nine.id}
            onClick={this.handleClick}
          >
            {Constants.nine.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.four.objType}
            id={Constants.four.id}
            onClick={this.handleClick}
          >
            {Constants.four.value}
          </button>
          <button
            className={Constants.five.objType}
            id={Constants.five.id}
            onClick={this.handleClick}
          >
            {Constants.five.value}
          </button>
          <button
            className={Constants.six.objType}
            id={Constants.six.id}
            onClick={this.handleClick}
          >
            {Constants.six.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.one.objType}
            id={Constants.one.id}
            onClick={this.handleClick}
          >
            {Constants.one.value}
          </button>
          <button
            className={Constants.two.objType}
            id={Constants.two.id}
            onClick={this.handleClick}
          >
            {Constants.two.value}
          </button>
          <button
            className={Constants.three.objType}
            id={Constants.three.id}
            onClick={this.handleClick}
          >
            {Constants.three.value}
          </button>
        </div>
        <div>
          <button
            className={Constants.zero.name}
            id={Constants.zero.id}
            onClick={this.handleZero}
          >
            {Constants.zero.value}
          </button>
          <button
            className={Constants.decimal.name}
            id={Constants.decimal.id}
            onClick={this.handleDecimal}
          >
            {Constants.decimal.value}
          </button>
        </div>
        <div id="arithmetic-operators">
          <button
            name={Constants.multiply.name}
            id={Constants.multiply.id}
            onClick={this.handleArithmetic}
          >
            {Constants.multiply.value}
          </button>
          <button
            name={Constants.subtract.name}
            id={Constants.subtract.id}
            onClick={this.handleArithmetic}
          >
            {Constants.subtract.value}
          </button>
          <button
            name={Constants.add.name}
            id={Constants.add.id}
            onClick={this.handleArithmetic}
          >
            {Constants.add.value}
          </button>
          <button
            className={Constants.equals.name}
            id={Constants.equals.id}
            onClick={this.handleClick}
          >
            {Constants.equals.value}
          </button>
        </div>
      </div>
    );
  }
}

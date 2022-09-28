import React from 'react';
import * as Constants from './objNumSym.js';
import Add from './operational-components/Add.js';
import Subtract from './operational-components/Subtract.js';
import Divide from './operational-components/Divide.js';
import Multiply from './operational-components/Multiply.js';
import './styles/App.css';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [0],
      jsx: 'Will Remove This Soon',
    }
    console.log(this.props)

    this.handleArithmetic = this.handleArithmetic.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.ToggleName = this.ToggleName.bind(this);
  }

  handleArithmetic(e) {
    let id = document.getElementById(e.target.id)
    //this.setState({input: this.props.Constants.method});
  }

  handleClick(e) {
    class spreadNewInput {
      constructor(num) {
        if (num === 'clear') {
          return this.setState( {input: 0 })
        } else if (this.input[0] === 0) {
          return this.setState({ input: [num] });
        } else if (this.input[0] > 0) {
          return this.setState({ input: [...this.input, num] });
        } else if (num === '.') {
          if (this.input.filter((val, num) => val === num)) {
            return console.error('There is already a decimal there!! Your val: ' + `${num}`);
          } else {
            return this.setState({ input: [...this.input, num] });
          }
        } else {
          console.alert('Only either #MUL,#DIV,#ADD, or #SUBT:', num);
          this.setState({ input: [...num] });
        }
      }
    };


    switch (e.target.id) {
      case 'zero':
        console.log('oneID:', e.target.id);
        return this.setState({ input: [...this.state.input, 0] });
      case 'one':
        console.log('oneID:', e.target.id);
        return this.setState({ input: [...this.state.input, 1] });
      case 'two':
        console.log('twoID:', e.target.id);
        return this.setState({ input: [...this.state.input, 2] });;
      case 'three':
        console.log('threeID:', e.target.id);
        return this.setState({ input: [...this.state.input, 3] });
      case 'four':
        console.log('fourID:', e.target.id);
        return this.setState({ input: [...this.state.input, 4] });
      case 'five':
        console.log('fiveID:', e.target.id);
        return this.setState({ input: [...this.state.input, 5] });
      case 'six':
        console.log('sixID:', e.target.id);
        return this.setState({ input: [...this.state.input, 6] });
      case 'seven':
        console.log('sevenID:', e.target.id);
        return this.setState({ input: [...this.state.input, 7] });
      case 'eight':
        console.log('eightID:', e.target.id);
        return this.setState({ input: [...this.state.input, 8] });
      case 'nine':
        console.log('nineID:', e.target.id);
        return this.setState({ input: [...this.state.input, 9] });
      case 'decimal':
        console.log('decimal:', e.target.id);
        return this.setState({ input: [...this.state.input, '.'] });
      case 'clear':
        console.log('clearID:', e.target.id);
        return this.setState({ input: [0] });
      case 'equals':
        console.log('equalsID:', e.target.id);
        //this.ToggleName(e);
        return console.log('InputAfterToggle:', this.state.input)
      default:
        return console.log('No ID Found ERR:', e.target.id)
    }
    console.log('handleClick => exp:', this.state.exp);
    console.log('handleClick => input:', this.state.input);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {/* from working test <Utils/> */}
          </div>
          <h3 id='display'>{this.state.input}</h3>
          <h3>{this.state.result}</h3>
          This is where constants show: {Constants.one.value}
        </div><div>
          <button id={Constants.clear.id} onClick={this.setState({input: 0})}>{Constants.clear.value}</button>
          <button name={Constants.divide.name} id={Constants.divide.id} onClick={this.handleArithmetic}>{Constants.divide.value}</button>
        </div><div>
          <button id={Constants.seven.id} onClick={this.handleClick}>{Constants.seven.value}</button>
          <button id={Constants.eight.id} onClick={this.handleClick}>{Constants.eight.value}</button>
          <button id={Constants.nine.id} onClick={this.handleClick}>{Constants.nine.value}</button>
        </div><div>
          <button id={Constants.four.id} onClick={this.handleClick}>{Constants.four.value}</button>
          <button id={Constants.five.id} onClick={this.handleClick}>{Constants.five.value}</button>
          <button id={Constants.six.id} onClick={this.handleClick}>{Constants.six.value}</button>
        </div><div>
          <button id={Constants.one.id} onClick={this.handleClick}>{Constants.one.value}</button>
          <button id={Constants.two.id} onClick={this.handleClick}>{Constants.two.value}</button>
          <button id={Constants.three.id} onClick={this.handleClick}>{Constants.three.value}</button>
        </div><div>
          <button id={Constants.zero.id} onClick={this.handleClick}>{Constants.zero.value}</button>
          <button id={Constants.decimal.id} onClick={this.handleClick}>{Constants.decimal.value}</button>
        </div><div id="arithmetic-operators">
          <button name={Constants.multiply.name} id={Constants.multiply.id} onClick={this.handleArithmetic}>{Constants.multiply.value}</button>
          <button name={Constants.subtract.name} id={Constants.subtract.id} onClick={this.handleArithmetic}>{Constants.subtract.value}</button>
          <button name={Constants.add.name} id={Constants.add.id} onClick={this.handleArithmetic}>{Constants.add.value}</button>
          <button id={Constants.equals.id} onClick={this.handleClick}>{Constants.equals.value}</button>
        </div>
      </div>
    )
  }
}
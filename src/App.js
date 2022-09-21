import React from 'react';
import Add from './operational-components/Add.js';
import Subtract from './operational-components/Subtract.js';
import Divide from './operational-components/Divide.js';
import Multiply from './operational-components/Multiply.js';
import './styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allClear: '',
      add: '+',
      subtract: '-',
      multipy: '*',
      divide: '/',
      value: 0,
      input: '0',
      jsx: ''
    }

    this.handleArithmetic = this.handleArithmetic.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    switch (e.target.name) {
      case 'INPUT_ON':
        console.log('log change:', "ON to OFF")
        return e.target.name = 'INPUT_OFF';
      case 'INPUT_OFF':
        console.log('log change:', 'OFF to ON')
        return e.target.name = 'INPUT_ON';
      default:
        console.log('log change:', 'default')
        return 'INPUT_OFF'
    }
  }

  handleArithmetic(e) {
    switch (e.target.name) {
      case 'MULTIPLY':
        console.log('MULTIPLY')
        return this.setState({ jsx: <Multiply input={this.state} /> })
      case 'SUBTRACT':
        console.log('SUBTRACT:')
        return this.setState({ jsx: <Subtract input={this.state} /> })
      case 'ADD':
        console.log('ADD:')
        return this.setState({ jsx: <Add input={this.state} /> })
      case 'DIVIDE':
        console.log('DIVIDE:')
        return this.setState({ jsx: <Divide input={this.state} /> })
      default:
        return ''
    }
  }

  render() {
    return (
      <div>
        <p>Javascript Calculator</p>
        <div>
          <h3>{this.state.value}</h3>
          <h3>{this.state.input}</h3>
          <div>{this.state.jsx}</div>
        </div>
        <div>
          <button id='all-clear'>AC</button>
          <button name='DIVIDE' id='divide' onClick={this.handleArithmetic}>/</button>
        </div>
        <div>
          <button id="seven" name="INPUT_ON" onClick={this.handleInput}>7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
        </div>
        <div>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
        </div>
        <div>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
        </div>
        <div>
          <button id='zero'>0</button>
          <button id='decimal'>.</button>
        </div>
        <div id="arithmetic-operators">
          <button name="MULTIPLY" id='multiply' onClick={this.handleArithmetic}>X</button>
          <button name="SUBTRACT" id="subtract" onClick={this.handleArithmetic}>-</button>
          <button name="ADD" id="add" onClick={this.handleArithmetic}>+</button>
          <button name="EQUALS" id='equals' onClick={this.handleArithmetic}>=</button>
        </div>
      </div>
    );
  }
}
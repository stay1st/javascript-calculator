// import React from 'react';
// import Add from './operational-components/Add.js';
// import Utils from './Utils'
// import Subtract from './operational-components/Subtract.js';
// import Divide from './operational-components/Divide.js';
// import Multiply from './operational-components/Multiply.js';
// import './styles/App.css';


// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       beforeSym: [],
//       afterSym: [],
//       result: 0,
//       exp: [],
//       input: [0],
//       jsx: ''
//     }
//     this.handleArithmetic = this.handleArithmetic.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//     this.toggleEvaluateExp = this.toggleEvaluateExp.bind(this);
//   }

//   toggleEvaluateExp(e) {
//     switch (e.target.name) {
//       case 'INPUT_OFF':
//         console.log("toggle NAME=OFF:", e.target.name);
//         return e.target.name = 'INPUT_OFF';
//       case 'INPUT_ON':
//         console.log('ERROR, DID NOT EVALUATE');
//     }
//     return this.state.input
//   }

//   handleArithmetic(e) {
//     switch (e.target.name) {
//       case 'MULTIPLY':
//         console.log('MULTIPLY:', e.target.name)
//         return this.setState({ jsx: <Multiply input={this.state} /> })
//       case 'SUBTRACT':
//         console.log('SUBTRACT:', e.target.name)
//         return this.setState({ jsx: <Subtract input={this.state} /> })
//       case 'ADD':
//         console.log('ADD:', e.target.name)
//         return this.setState({ jsx: <Add input={this.state} /> })
//       case 'DIVIDE':
//         console.log('DIVIDE:', e.target.name)
//         return this.setState({ jsx: <Divide input={this.state} /> })
//       case 'INPUT_ON':
//         return console.log('Expression is evaluated')
//       default:
//         return ''
//     }
//   }

//   // handleInput(e) {
//   //   console.log('handleInput-ButtonID:', e.target.id);
//   //   /* ID should be a alphanumerical string's name */
//   //   console.log('handleInput-IDType:', typeof e.target.id);
//   //   /* Should always log a 'string' from buttons 0-9|.|=|AC (AC to reset state) */
//   //   switch (e.target.id) {
//   //     case 'zero':
//   //       console.log('oneID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 0] });
//   //     case 'one':
//   //       console.log('oneID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 1] });
//   //     case 'two':
//   //       console.log('twoID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 2] });;
//   //     case 'three':
//   //       console.log('threeID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 3] });
//   //     case 'four':
//   //       console.log('fourID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 4] });
//   //     case 'five':
//   //       console.log('fiveID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 5] });
//   //     case 'six':
//   //       console.log('sixID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 6] });
//   //     case 'seven':
//   //       console.log('sevenID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 7] });
//   //     case 'eight':
//   //       console.log('eightID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 8] });
//   //     case 'nine':
//   //       console.log('nineID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [...this.state.input, 9] });
//   //     case 'clear':
//   //       console.log('clearID:', e.target.id);
//   //       return this.setState(() => this.input = { input: [0] });
//   //     case 'equals':
//   //       console.log('equalsID:', e.target.id);
//   //       this.toggleEvaluateExp(e);
//   //       return console.log('InputAfterToggle:', this.state.input)
//   //     default:
//   //       return console.log('No ID Found ERR:', e.target.id)
//   //   }
//   //   console.log('handleInput => exp:', this.state.exp);
//   //   console.log('handleInput => input:', this.state.input);
//   // }

//   render() {
//     return (
//       <div>
//         <div>
//           <div>
//             {/* from working test <Utils/> */}
//           </div>
//           <h3>{this.state.result}</h3>
//           <h3>{this.state.input}</h3>
//           <div>{this.state.jsx}</div>
//         </div>
//         <div>
//           <button id='clear' onClick={this.handleInput}>AC</button>
//           <button name='DIVIDE' id='divide' onClick={this.handleArithmetic}>/</button>
//         </div>
//         <div>
//           <button id="seven" onClick={this.handleInput}>7</button>
//           <button id="eight" onClick={this.handleInput}>8</button>
//           <button id="nine" onClick={this.handleInput}>9</button>
//         </div>
//         <div>
//           <button id="four" onClick={this.handleInput}>4</button>
//           <button id="five" onClick={this.handleInput}>5</button>
//           <button id="six" onClick={this.handleInput}>6</button>
//         </div>
//         <div>
//           <button id="one" onClick={this.handleInput}>1</button>
//           <button id="two" onClick={this.handleInput}>2</button>
//           <button id="three" onClick={this.handleInput}>3</button>
//         </div>
//         <div>
//           <button id='zero' onClick={this.handleInput}>0</button>
//           <button id='decimal' onClick={this.handleInput}>.</button>
//         </div>
//         <div id="arithmetic-operators">
//           <button name="MULTIPLY" id='multiply' onClick={this.handleArithmetic}>X</button>
//           <button name="SUBTRACT" id="subtract" onClick={this.handleArithmetic}>-</button>
//           <button name="ADD" id="add" onClick={this.handleArithmetic}>+</button>
//           <button name="INPUT_OFF" id='equals' onClick={this.handleInput}>=</button>
//         </div>
//       </div>
//     )
//   }
// }
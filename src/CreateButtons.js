// import React, { useState } from 'react';
// import objButtons from './obj.const.js'
// import App from './App.js';
// import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers.js';


// export default function CreateButtons(props) {

//     const [input, setInput] = useState([0]);

//     function spreadNewInput(num) {

//         /* FCC rules = 0 as a placeholder and reinitialize state on #clear */
//         if (num === 'clear') {
//             return setInput(() => [0]);
//             /* this conditional statement is for #clear */
//         } else if (input[0] === 0) {
//             return setInput(() => [num]);
//         } else if (input[0] > 0) {
//             return setInput(() => [...input, num]);
//         } else if (num === '.') {
//             /* mapping input to make sure there isn't already a decimal */
//             if (input.filter((val, num) => val === num)) {
//                 return 'err'
//             } else {
//                 return setInput(() => [...input, num]);
//             }
//         } else {
//             console.alert('Only either #MUL,#DIV,#ADD, or #SUBT:', num);
//             setInput(() => [...num]);
//         }
//     };

//     class ButtonSuperClass {
//         constructor(id, num, method) {
//             this.id = id;
//             this.num = num;
//             this.elem = <button id={`${id}`} onClick={() => spreadNewInput(this.num)}>{`${num}`}</button>;
//         }
//         getDetails() {
//             return (`Button id: ${this.id} num: ${this.num}. elem: returns JSX`)
//         }
//     }

//     ButtonSuperClass.prototype.add = function(a, b, method){
//         this.a = a;
//         this.b = b;
//         this.solve = () => {
//             return console.log("Solve " +`${this.a}` + ' and ' + `${this.b}` + "insert a function.")
//         }
        
//     }

//     let newObjArr = [];

//     const values = [...objButtons].map(val => console.log('values', val))
//     for (let i = 0; i < values.length - 1 && objButtons; i++) {
//        newObjArr[i] = new ButtonSuperClass(objButtons[i], values[i]);
//     }
//     console.log('newObjArr:', newObjArr)
//     //  test = new ButtonSuperClass('nine', 9);
//     return (
//         <div>
//             <div id='display'><strong>DISPLAY Super:</strong> {input}</div>
//             <div>
//             {}
//             </div>
//         </div>
//     )
// }

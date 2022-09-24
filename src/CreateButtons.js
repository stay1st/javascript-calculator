import React, { useState } from 'react';
import App from './App.js';




export default function CreateButtons(props) {

    const [input, setInput] = useState([0]);

    function spreadNewInput(num) {
        /* FCC rules = 0 as a placeholder and reinitialize state on #clear */
        if (num === 'clear') {
            console.log('ResetInput=[0] `#clear`:', num)
            return setInput(() => [0]);
            /* this conditional statement is for #clear */
        } else if (input[0] === 0) {
            console.log('setInput=[0] Number:', num)
            return setInput(() => [num]);
        } else if (input[0] > 0) {
            console.log('setInput=[...input, num] Number:', num);
            return setInput(() => [...input, num]);
        } else if (num === '.') {
            /* mapping input to make sure there isn't already a decimal */
            if (input.filter((val, num) => val === num)) {
                return console.log('Input already has `.`', num);
            } else {
                return setInput(() => [...input, num]);
            }
        } else {
            console.log('#MUL,#DIV,#ADD,#SUBT:', num);
            setInput(() => [...num]);
        }
    };

    class ButtonSuperClass {
        constructor(id, num) {
            this.id = id;
            this.num = num;
            this.input = props.input
            this.method = () => spreadNewInput(this.num);
            this.elem = <button id={`${id}`} onClick={this.method}>{`${num}`}</button>;
        }
        getDetails() {
            return (`This button id number ${this.id} set num=${this.num}`)
        }
    }

    const testElement = new ButtonSuperClass('testElement', 7357);
    const elemOne = new ButtonSuperClass('two', 2);

    return (
        <div>
            <p>testElement: {testElement.elem}</p>
            <h3>Created Elements below?</h3>
            {elemOne.elem}
            <div id='display'><strong>DISPLAY Super:</strong> {input}</div>
            <HandleElements
                ButtonSuperClass={ButtonSuperClass}
                input={input} 
            />
        </div>
    )
}

export class HandleElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         one: new props.ButtonSuperClass('one', 1),
         proto: new props.ButtonSuperClass(),
        }
    }

    render() {
        return (
            <div>
            <div id='display'><strong>DISPLAY:</strong> {this.input}</div>
            {this.state.one.elem}
                {console.log(this.state.one)}
            </div>
        )
    }
}

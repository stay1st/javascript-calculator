import React, { useState } from 'react';
import App from './App.js';
import Add from './operational-components/Add.js';
import Subtract from './operational-components/Subtract.js';
import Divide from './operational-components/Divide.js';
import Multiply from './operational-components/Multiply.js';

export default function HandleChange() {
    
    // switch (e.target.id) {
    //     case 'zero':
    //       console.log('oneID:', e.target.id);
    //       return this.setState(() => this.input = { input: [...this.state.input, 0] });
    // }

    const [input, setInput] = useState([0]);

    const handleID = (id, num) => {
        return {
            id: `${id}`,
            num: `${num}`
        }
    }

    const userInputMatters = (num) => setInput(() => [...input, num]);

    function CreateElement(id, num) {
        this.id = id
        this.num = num
        this.method = () => userInputMatters(this.num)
        this.elem = <button id={`${id}`} onClick={this.method}>{`${num}`}</button>
    }

    const one = new CreateElement('one', 1);

    return (
        <div>
            {one.elem}
            {console.log('Created:', one.elem)}
            {console.log('HandleChangeComponent:', input)}
            <button>Utils</button>
        </div>
    )
}
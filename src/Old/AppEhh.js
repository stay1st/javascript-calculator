import React, { useState } from 'react';
import Add from './operational-components/Add.js';
import CreateButtons, { HandleElements } from './CreateButtons';
import './styles/App.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <div>
                    <CreateButtons />
                </div>
            </div>
        )
    }
}
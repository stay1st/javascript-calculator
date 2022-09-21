import React, { useState } from "react";

// Can successfully pass a prop to component via `this.props.input`
export default class Subtract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div>{console.log(this.props.input)}</div>
        )
    }
}
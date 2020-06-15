import React, { Component } from 'react'

export default class HandleBtn extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="handleBtn">
                {this.props.handleBtns.map(item => <div>{item.icon}</div>)}
            </div>
        )
    }
}

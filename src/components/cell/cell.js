import React, { Component } from 'react'
import './cell.scss'
export default class Cell extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className={this.props.className ? this.props.className : ''}>
                <div className="cell">
                    <div className="content">
                        <div className="prefix">{this.props.prefix}</div>
                        <div className="cellText">{this.props.content}</div>
                    </div>
                    <div className="rightIcon">{this.props.rightIcon}</div>
                </div>
            </div>
        )
    }
}

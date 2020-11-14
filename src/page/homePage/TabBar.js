import React, { Component } from 'react'
import './header.scss'
export default class TabBar extends Component {
    render() {
        return (
            <div id="tabBar">
                <div className="tabs">动态</div>
                <div className="tabs">推荐</div>
            </div>
        )
    }
}

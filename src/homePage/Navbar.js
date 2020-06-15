import React, { Component } from 'react'
import './header.css'
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="search">
                <span className="iconfont">&#xe60c;</span>
                    <input type="text"/>
                    <span className="iconfont">&#xe606;</span>
                </div>
                <div className="news">
                  <span className="iconfont color_white">&#xe630;</span>
                </div>
            </div>
        )
    }
}

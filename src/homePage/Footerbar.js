import React, { Component } from 'react'
import './header.css'
export default class Footerbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerList: [
                {
                    // icon: '&#xe613;',
                    icon:<span>&#xe613;</span>,
                    name: '首页'
                },
                {
                    // icon: '&#xe629;',
                    icon:<span>&#xe629;</span>,
                    name: '书影音'
                },
                {
                    // icon: '&#xe61f;',
                    icon:<span>&#xe61f;</span>,
                    name: '小组'
                },
                {
                    // icon: '&#xe639;',
                    icon:<span>&#xe639;</span>,
                    name: '市集'
                },
                {
                    icon: <span>&#xe653;</span>,
                    // icon: <div className="icon iconfont">&#xe653;</div>,
                    name: '我的'
                }
            ]
        }
    }
    changePage(item) {

    }
    render() {
        return (
            <div id="footer">
                {this.state.footerList.map(item => 
                    <div className="footerItem" key={item.name}>
                        <div className="icon iconfont">{item.icon}</div>
                        {/* {item.icon} */}
                        <div className="name">{item.name}</div>
                    </div>
                )}
            </div>
        )
    }
}

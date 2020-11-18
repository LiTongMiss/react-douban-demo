import React, { Component } from 'react'
import {BrowserRouter, Route,Link } from 'react-router-dom'
import MyCenter from '../myCenter/MyCenter'
import './header.scss'
export default class Footerbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerList: [
                {
                    // icon: '&#xe613;',
                    icon:<span>&#xe613;</span>,
                    name: '首页',
                    toPath:'/'
                },
                {
                    // icon: '&#xe629;',
                    icon:<span>&#xe629;</span>,
                    name: '书影音',
                    toPath:'/audioBook'
                },
                {
                    // icon: '&#xe61f;',
                    icon:<span>&#xe61f;</span>,
                    name: '小组',
                    toPath:'/group'
                },
                {
                    // icon: '&#xe639;',
                    icon:<span>&#xe639;</span>,
                    name: '市集',
                    toPath:'/market'
                },
                {
                    icon: <span>&#xe653;</span>,
                    // icon: <div className="icon iconfont">&#xe653;</div>,
                    name: '我的',
                    toPath:'/myCenter'
                    
                }
            ]
        }
    }
    changePage(index) {
        let list = [...new Set(document.getElementById('footer').children)]
        console.log('list',list,document.getElementById('footer'))
        list.forEach((item,i) =>{
            if(i == index){
                item.classList.add('active')
            }else {
                item.classList.remove('active')
            } 
        })
    }
    render() {
        return (
             <div id="footer">
                    {this.state.footerList.map((item,index) => 
                        <div className={index==0? 'footerItem active':'footerItem'} key={item.name} onClick={()=>this.changePage(index)}>
                            <Link to={item.toPath}> 
                                <div className="icon iconfont">{item.icon}</div>
                                <div className="name">{item.name}</div>
                            </Link>
                                {/* // <div className="icon iconfont">{item.icon}</div>
                                // {/* {item.icon} */}
                                {/*<div className="name">{item.name}</div> */}
                            
                        </div>
                    )}
                </div>
               
            )
    }
}

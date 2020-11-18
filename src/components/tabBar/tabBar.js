import React, {Component} from 'react'
import './tabBar.scss'

export default function TabBar(props) {
    return (
        <div className="tabBar">
         {props.list.map((item, i)=><span className={props.activeTab == i ? 'active' : '' } key={item.name} onClick={props.onClick(i)}>{item.name}</span>)}
        </div>
    )
}
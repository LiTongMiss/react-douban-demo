import React, { Component } from 'react'
import TabBar from './TabBar'
import NewsItem from './NewsItem'
import NavBar from './Navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <TabBar></TabBar>
                <NewsItem></NewsItem>
            </div>
        )
    }
}

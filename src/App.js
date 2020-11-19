import React from 'react';
import {BrowserRouter, Route,Link, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.scss';
import Game from './ReactExmaple/Game'
import Navbar from './page/homePage/Navbar'
import Footerbar from './page/homePage/Footerbar'

import MyCenter from './page/myCenter/MyCenter'
import Home from './page/homePage/Home'
import AudioBook from './page/audioBook/audioBook'
import Group from './page/group/group'
import Market from './page/market/market'

function App() {

  // let state = {
  //   doubanList: [{
  //     title: '标题',
  //     icon: '图标',
  //     tip: '标签',
  //     content: '内容'
  //   }]
  // }
  return (
    <BrowserRouter>
     <div>
   
      {/* <Navbar></Navbar> */}
      {/* <TabBar></TabBar> */}
      {/* {this.doubanList.map(item => <div></div>)} */}
      {/* <NewsItem></NewsItem> */}
      <Footerbar></Footerbar>
    </div>
      <Switch>
      <Game></Game> 
        <Route exact path='/' component={Home}></Route>
        <Route path='/myCenter' component={MyCenter}></Route>
        <Route path='/audioBook' component={AudioBook}></Route>
        <Route path='/group' component={Group}></Route>
        <Route path='/market' component={Market}></Route>
      </Switch>
    </BrowserRouter>
   
    
     
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

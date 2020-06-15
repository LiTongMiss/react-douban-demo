import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Game from './Game'
import Navbar from './homePage/Navbar'
import Footerbar from './homePage/Footerbar'
import TabBar from './homePage/TabBar'
import NewsItem from './homePage/NewsItem'

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
    <div>
      <Navbar></Navbar>
      <TabBar></TabBar>
      {/* {this.doubanList.map(item => <div></div>)} */}
      <NewsItem></NewsItem>
      <Footerbar></Footerbar>
    </div>
    
    // <Game></Game>  
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

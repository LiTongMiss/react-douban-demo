import React ,{Component}from 'react'
import TabBar from '../../components/tabBar/tabBar'

export default class SudioBook extends Component{
    constructor(props) {
        super(props)
        this.state = {
            list:[
                {name:'电影'},
                {name:'电视'},
                {name:'读书'},
                {name:'原创小说'},
                {name:'音乐'},
                {name:'同城'}
            ],
            activeTab: 0
        }
    }
    changeTab(i){
        console.log('i', i)
        this.setState({
            list:[
                {name:'电影'},
                {name:'电视'},
                {name:'读书'},
                {name:'原创小说'},
                {name:'音乐'},
                {name:'同城'}
            ],
            activeTab: i
        })
    }
    render(){
        return (
            <TabBar list={this.state.list} activeTab={this.state.activeTab} onClick={(i)=>this.changeTab}></TabBar>
        )
    }
   
}
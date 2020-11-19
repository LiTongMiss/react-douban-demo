import React ,{Component}from 'react'
import TabBar from '../../components/tabBar/tabBar'

export default class SudioBook extends Component{
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {name:'电影'},
                {name:'电视'},
                {name:'读书'},
                {name:'原创小说'},
                {name:'音乐'},
                {name:'同城'}
            ]
        }
    }

    render(){
        return (
            // <div onClick={(i)=>this.changeTab()}>测试</div>
            <TabBar tabList={this.state.list}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </TabBar>
        )
    }
   
}
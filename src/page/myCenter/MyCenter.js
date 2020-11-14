import React,{Component} from 'react';
import './myCenter.scss'
import Cell from '../../components/cell/cell'
import RecordCard from './RecordCard'
export default class MyCenter extends Component {
    constructor(props) {
        super(props)
        this.state={
            myCenterList:[
                {
                    prefix: <span className="icon iconfont">&#xe60d;</span>,
                    content: '我的发布',
                    rightIcon: '>'
                },
                {
                    prefix: <span className="icon iconfont">&#xe64a;</span>,
                    content: '我的日记',
                    rightIcon: '>'
                },
                {
                    prefix: <span className="icon iconfont">&#xe618;</span>,
                    content: '我的关注',
                    rightIcon: '>'
                },
                {
                    prefix: <span className="icon iconfont">&#xe61c;</span>,
                    content: '相册',
                    rightIcon: '>'
                },
                {
                    prefix: <span className="icon iconfont">&#xea5a;</span>,
                    content: '豆列/收藏',
                    rightIcon: '>'
                }
            ]
        }
    }
    render(){
        return (
            <div className='myCenter container'>
                <div className="myInfo">
                    <div className="setting">
                        <span className="icon iconfont">&#xe60c;</span>
                        <span className="icon iconfont">&#xe630;</span>
                    </div>
                    <div className="userInfo">
                        <div className="info">
                            <div className="userImg"></div>
                            <div className="userDetail">
                                <div className="userName">用户名<sub className="icon iconfont">&#xe653;</sub></div>
                                <div className="attent">关注 14   被关注 0</div>
                            </div>
                        </div>
                        <div className="more">个人主页></div>
                    </div>
                </div> 
                <div className="userTabs">
                    <div className="adv"></div>
                    <div className="userRecord">
                        <div className="recordType"></div>
                        <div className="recordList">
                            <RecordCard></RecordCard>
                            <RecordCard></RecordCard>
                            <RecordCard></RecordCard>
                        </div>
                    </div>
                </div>
                <Cell className='mtb10' prefix={<span className="icon iconfont">&#xe601;</span>} content="看电影" rightIcon='>'></Cell>
    
                 {this.state.myCenterList.map(item=><Cell {...item} key={item.content}></Cell>)}

                 <Cell className='mtb10' prefix={<span className="icon iconfont">&#xe60e;</span>} content="钱包" rightIcon='>'></Cell>
            </div>
        )
    }
   
}

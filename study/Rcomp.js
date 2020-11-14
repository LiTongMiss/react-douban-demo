import React, { Component, PureComponent } from 'react'
import Button from 'antd'

// 组件设计原则：尽可能创建傻瓜组件 只展示
// 15.3以后 purCompoenet
// class类型组件  才有state状态  和生命周期

export default class Rcomp extends Component {

    shouldComponentUpdate(nextProps){
        // 判断组件是否需要更新
        if(nextProps.data.body ==this.props.data.body){
            return false
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


// 创建纯组件  
// 纯组件是浅比较   最好是将数据结构成基本类型后传入纯组件
class pure extends PureComponent {

}


// 16.6以后   可以使用memo  用函数类型创建纯组件  
// memo 高阶组件
const Prue = React.memo(function (props) {
    return(
        <div></div>
    )
})


//  高阶组件 ： 就是一个函数  ，接收一个组件 返回一个组件  HOC   组件功能单一 用高阶组件扩展功能

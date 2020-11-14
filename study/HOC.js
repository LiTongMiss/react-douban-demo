import React, { Component } from 'react'


//  高阶组件 ： 就是一个函数  ，接收一个组件 返回一个组件  HOC   组件功能单一 用高阶组件扩展功能
function Text(props) {
    return(
        <div>{props.stage}-{props.name}</div>
    )

}

const withKaikeba = Comp =>{
    // 获取name
    const name ='高阶组件'
    // return props => <Comp name={name} {...props}></Comp>
    // 返回构造函数组件  可以更改组件生命周期等
    return class NewComp extends Component{
        componentDidMount() {

        }
        render() {
            return(
                <div></div>
            )
        }
    }
}

const withLog = Comp=>{
    console.log(Comp.name, '渲染了')
    return props => <Comp {...props}></Comp>
}

//  高阶组件可以链式调用
const newKaikeba = withLog(withKaikeba(withLog(Text)))

export default class HOC extends Component {
    render() {
        return (
            <div>
                {/* <Text stage='react'></Text> */}
                <newKaikeba stage='react'></newKaikeba>
            </div>
        )
    }
}


// 高阶组件 装饰器写法  装饰器只能用于class组件
//  执行顺序  从上往下

@withLog
@withKaikeba
@withLog
export default class HOC extends Component {
    render() {
        return (
            <div>
                {/* <Text stage='react'></Text> */}
                <newKaikeba stage='react'></newKaikeba>
            </div>
        )
    }
}
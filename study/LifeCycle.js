import React, { Component } from 'react'


// 生命周期  16.0之后有fiber架构  16.3与16.4不同
export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        // 初始化数据
    }
    // 16.4删除
    componentWillMount() {
        // 组件将要挂载
    }
    componentDidMount() {
        // 组件挂载完后
    }
    // 16.4删除
    componentWillReceiveProps() {
        //父组件传递的属性有变化，做响应属性
    }
     // 16.4 新生命周期
    getDerivedStateFromProps() {

    }
    shouldComponentUpdate() {
        // 组件是否需要更新
        // 必须返回true或false
        return true
    }
    // 16.4 新生命周期
    forceUpdate(){
``
    }
    // 16.4 新生命周期
    getSnapshotBeforeUpdate(){
        // 更新前dom快照
    }
    //16.0以后 
    static getDerivedStateFromError(error) {
        return {hasError:true}
    }
   //16.0以后 
    componentDidCatch(error, info) {
        // 错误捕获
    }
    // 16.4删除
    componentWillUpdate() {
        // 组件将要更新
    }
    componentDidUpdate() {
        // 组件更新
    }
    componentWillUnmount() {
        // 组件卸载
    }
    // render会多次执行
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

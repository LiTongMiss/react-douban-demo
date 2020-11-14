import React from 'react'
import store from '../store'
import {Provider, connect} from 'react-redux'



// 写store的映射函数
// const mapStateToProps = state =>({num:state})

// 如果使用了combineReducer  使用状态的时候  需要加上命名空间
const mapStateToProps = state =>({num:state.counter})
//  actionCreaters  解耦

const mapDispatchToProps = {
    add:()=>({type:'add'}),
    minus:()=>({type:'minus'}),
    // 异步提交  基于thunk中间件  返回一个函数  不是一个action
    // 建议淡出写servers  来管理异步请求操作  引入业务组件
    asyncAdd: ()=> dispatch =>{
        // 一步操作
        setTimeout(()=>{
            dispatch({type:'add'})
        },1500)
    }
}

// function storeJSX() {
//     return (
//         <div>
//             {/* 通过getState  获取都store的值 */}
//             {/* store中的值  要手动调用更新 */}
//             <p>{store.getState()}</p>
//             <div>
//                 {/* dispatch 触发store方法 */}
//                 <button onClick={()=>{store.dispatch({type:'add'})}}>+</button>
//                 <button onClick={()=>{store.dispatch({type:'minus'})}}>-</button>
//             </div>
//         </div>
//     )
// }

function StoreJSX({num, add, minus}) {
    return (
        <div>
            {/* 通过getState  获取都store的值 */}
            {/* store中的值  要手动调用更新 */}
            <p>{num}</p>
            <div>
                {/* dispatch 触发store方法 */}
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
            </div>
        </div>
    )
}

//  装饰器写法
@connect(mapStateToProps, mapDispatchToProps)
class StoreJSX1 extends React.Component{
    render(){
        // store  从props中解构出来
        const {num, add, minus, asyncAdd} = this.props
        return (
            <div>
                {/* 通过getState  获取都store的值 */}
                {/* store中的值  要手动调用更新 */}
                <p>{num}</p>
                <div>
                    {/* dispatch 触发store方法 */}
                    <button onClick={add}>+</button>
                    <button onClick={minus}>-</button>
                    <button onCkick={asyncAdd}>asyncAdd</button>
                </div>
            </div>
        )
    }
}

//   第一个参数  配置项  第二个需要扩展的组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(storeJSX)


export  function JSX() {
    return (
        <div>
            {/* 传入store */}
            <Provider store={store}>
                <StoreJSX></StoreJSX>
            </Provider>
        </div>
    )
}


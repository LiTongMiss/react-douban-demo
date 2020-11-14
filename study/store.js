import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger  from 'react-redux' 
import thunk from 'react-redux' 

// redux  没有异步提交 更爱数据   只嗯呢该同步修改

const counterReducer = (state = 0, action)=>{

    // 返回的应该是一个全新的对象
    switch (action.type){
        case 'add':
            return state+1;
        case 'minus':
            return state-1
        default:
            return state
    }
}


// 参数是创建的reducer
// applyMiddleware  按照中间件顺序传入  扩展action动作
//combineReducers 合并reducer  用键值对的方式
const store = createStore(combineReducers({counter:counterReducer}), applyMiddleware(logger, thunk))

export default store
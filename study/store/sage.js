import {call, put, takeEvery} from 'redux-saga/effects'

//模拟登录

const UserService = {
    login(uname){
        return new Promise((resolve, rejiect)=>{
            setTimeout()
        })
    }
}


function* login(action){
    try{
        yield put({type:'requsetLogin'})
        // 调用异步操作
    }catch() {

    }
}
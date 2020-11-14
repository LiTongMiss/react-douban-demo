import React,{useState, useEffect} from 'react'


// 给函数组件增加了操作副作用的能力
export default function EffectHook() {
    const [count, setCount] = useState(0)

    // 副作用狗子会在每次渲染时都执行
    //  理解成生命周期的符合  didmount
    // useEffect可以声明多个
    useEffect(()=>{
        document.title = `您点击了${count}次`

        // api

    },[count])  // 指定依赖   如果依赖不变化  函数不执行

    // 如果只打算执行一次，传递第二个参数[]
    // 第二个参数是依赖数组  类似didmount
    useEffect(()=>{
      
        // api调用

    },[])
    return (
        <div>
            
        </div>
    )
}

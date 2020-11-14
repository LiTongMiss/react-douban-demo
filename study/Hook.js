import React ,{useState, useEffect}from 'react'


//  hook  16.8以上版本  为了使函数是组建 拥有class组件的功能  state 方法等

// 自定义hook是一个函数，名称用use开头，函数内部可以调用其他钩子

// 其他hook  useContext useReducer useCallback useMemos

function useAge() {
    const [age, setAge] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            swtAge(20)
        }, 2000)
    })
    return age
}
export default function Hook() {
    // useState(initState)
    const [count, setCount] = useState(0)

    //多个状态   第一个数组项是状态 第二个是更好状态的函数
    const age= useAge() //使用自定义钩子
    const [fruit, setFruit]= useState('banana')
    const [input, setInput]= useState('')
    const [fruits,setFruits]= useState(['apple', 'apple'])
    return (
        <div>
            <p>点击了{count}次</p>
            <button onClick={()=>setCount(count+1)}>点击</button>

            <p>年龄{age ? age:'加载中。。。'}</p>
            <p>选择的水果{fruit}</p>
            <p>
                <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                <button onClick={()=>setInput([...fruits, input])}>新增水果</button>
            </p>
            <ul>
                {fruits.map(f=>(<li key={f} onClick={()=>setFruit(f)}>f</li>))}
            </ul>
        </div>
    )
}

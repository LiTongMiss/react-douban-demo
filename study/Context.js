import React,{useContext} from 'react'


// 第一种方法  使用上下文  
// 创建上下文
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

// 第二种方法  使用hook



function Child(prop) {
    // 使用context
    // return (<div> Child: {prop.foo}</div>)
    // 使用hook
    const ctx = userContext(MyContext)
    return (<div> Child: {ctx.foo}</div>)
}

// 第三种方法： 使用class执行静态contextType  固定写法
 class Child3 extends React.Component{
     static contextType = MyContext;
     render() {
         // this.context  固定写法
         return <div>Child3:{this.context.foo}</div>
     }
 }

export default function Context() {
    return (
        <div>
            {/* <MyContext.Provider></MyContext.Provider> */}
            {/* value是要传递的值 */}
            <Provider value={{foo:bar}}>
                {/* 使用Consumer */}
                <div>
                    {/* Consumer接收数据 */}
                <Consumer>  
                    {value=><Child {...value}/>}
                    {/* <Child></Child> */}
                </Consumer>
                {/* 可以有多个Comsumer */}
                <Consumer>  
                    {/* 使用hook */}
                    <Child></Child>
                </Consumer>
                <Consumer>  
                    {/* 使用contextType */}
                    <Child3></Child3>
                </Consumer>
                </div>
              
            </Provider>
            
        </div>
    )
}



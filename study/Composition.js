import React, { Component } from 'react'



// 组件复合  扩展组件时  尽量不要用集成  用复合
// export default class Composition extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// children是固定写法
// children可以是任意的js表达式  取决于使用者传入的内容

function Dialog(props){
    return (<div style={{border:`4px soild ${props.color || blue}`}}>
        {props.children}
        <div className="footer">
            {props.footer}
        </div>
    </div>)
}

function WeclomeDialog(props) {
    return (
        <Dialog {...props}>
            <h1>好</h1>
            <p>使用react</p>
        </Dialog>
    )
}


const Api = {
    getUser() {
        return{
            name:'jerry',
            age:20
        }
    }
}

function Fetcher(props) {

    const  user=Api[props.name]()
    return props.children(user)
}

function Filter({children,type}) {
    return (
        <div>
            {/* React.Children   react提供的方法  可以处理很多异常 */}
            {React.Children.map(children, child =>{
                if(child.type !== type){
                    return;
                }
                return child;
            })}
        </div>
    )
}

export default function() {
    // 类似vue具名插槽  可以传jsx
    const footer = <button onClick={()=>{alert('确定')}}>确定</button>
    return (

    // <WeclomeDialog color ="green" footer={footer}></WeclomeDialog> 
        // <Fetcher name="getUser">
        //     {/* 返回一个函数 */}
        //     {({name, age})=>(
        //         <p>{name}-{age}</p>
        //         )}
        // </Fetcher>
        // 过滤器  
        <div>
            <Filter type="p">
                <h1>react</h1>
                <p>react</p>
                <h1>vue</h1>
                <p>vue</p>
            </Filter>
        </div>
    )
}


// 组件复合  可以修改children内容

{/* <RadioGroup name="mvvm">
    <Radio value="vue">vue</Radio>
    <Radio value="angular">angular</Radio>
    <Radio value="react">react</Radio>
</RadioGroup> */}

function RadioGroup(props){
    return (
        <div>
            {React.children.map(props.children, child=>{
                // 给组件添加lebel属性
                // 不能执行  不能修改props传递的数据  child是虚拟dom  是个js对象  本身是不可扩展的 不可改的   vdom不可更改  克隆一个新的都没再修改
                // child.props.name = props.name
                //  第二个参数 组件属性
               return  React.cloneElement(child,{name: props.name})
            })}
        </div>
    )
}

// 单独处理children  重点  不能直接用props传递数据
function Radio({children, ...rest}) {
    return(
        <label htmlFor="">
            <input type="radio" {...rest}/>
            {children}
        </label>
    )
}

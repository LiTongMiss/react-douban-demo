import React, { Component } from 'react'


// react 严格的单向数据流
export default class Click extends Component {
    constructor(props) {
        super(props)
         // 状态的初始化一般放在构造器红
        this.state = {
            counter: 1,
            goods:[{

            }],
            text: '',
            cart: [
                {
                    text:'',
                    count:1
                }
            ]
        }
    }
   
    // 组件状态  state固定写法
    state = {
        counter: 1
    }
    // 回调函数为箭头函数 this指向父作用域  指向调用的dom节点
    textChange=(e)=>{
        this.setState({text:e.target.value})
    }

    addGood =()=>{
      
        return {
            goods: [...prevState.goods,{
                id:prevState.goods.length +1,
                text:prevState.text
            }]
        }
        // react 建议改变state使用纯函数
        // this.setState(prevState =>{
        // this.state.goods.push(...)
        // })
    }
    //加购函数
    addToCart=()=>{
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex(c=>c.id === good.id)
        const item = newCart[idx]
        if(item){
            // 创建新的数组，返回新的数组 
            newCart.splice(idx,1,{...itemm, count:item.count+1})
        }else{
            newCart.push({...good, count:1})
        }

        this.setState({cart:newCart})
    }

    add =good =>{
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex(c=>c.id === good.id)
        const item = newCart[idx]
        // if(item){
            // 创建新的数组，返回新的数组 
            newCart.splice(idx,1,{...itemm, count:item.count+1})
        // }else{
        //     newCart.push({...good, count:1})
        // }

        this.setState({cart:newCart})
    }

    minus=good=>{
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex(c=>c.id === good.id)
        const item = newCart[idx]
        // if(item){
            // 创建新的数组，返回新的数组 
            newCart.splice(idx,1,{...itemm, count:item.count-1})
        // }else{
        //     newCart.push({...good, count:1})
        // }

        this.setState({cart:newCart})
    }
    componentDidMount() {
        // 1.不能直接修改状态值
        // this.state.counter +=1

        // 2.批量执行  cb:更新后的回调 很少用
        // this.setState(obj,cb)
        // this.setState(fn,cb)
        // 会在执行时合并操作，实际只执行一次，结果为2
        this.setState({counter:this.state.counter + 1})
        this.setState({counter:this.state.counter + 1})
        this.setState({counter:this.state.counter + 1})

        // 调用函数，使用上一次执行后的状态对象，则可以批量执行 结果为4
        this.setState(prevState =>{
            return{
                counter:prevState.counter + 1
            }
        })
        this.setState(prevState =>{
            return{
                counter:prevState.counter + 1
            }
        })
        this.setState(prevState =>{
            return{
                counter:prevState.counter + 1
            }
        })
    }
    render() {
        const title = this.props.title ? <div>this.props.title</div> : null;
        return (
            <div>
                {/* jsx中可以写js表达式 */}
                {this.state.counter}
                {/* 条件循环 */}
                {/* {title} */}
                {this.props.title && <div>{this.props.title}</div>}
                {/* 列表渲染 */}
                <ul>
                    {this.state.goods.map(good=>{
                        <li key={good.id}>
                          {good.text}
                          <button onClick={()=>this.addToCart(good)}>加购</button>
                        </li>})
                    }
                </ul>

                <div>
                    {/* this.textChange 不能加（）  加上就立即执行了 */}
                    <input type="text" value={this.state.text} onChange={this.textChange}/>
                    <button onClick={this.addGood}>添加商品</button>
                </div>

                <Cart data={this.state.cart} minus={this.minus} add={this.add}></Cart>

            </div>
        )
    }
}

// 父子组件   状态提升  尽可能让子组件无状态  逻辑让父组件处理
function Cart({data, minus, add}) {
    return(
       <table>
           <tbody>
               {data.map(d=>(<tr key={d.text}>
                   <td>{d.text}</td>
                   <td>
                       <button onClick={()=>minus(d)}>-</button>
                        {d.count}
                        <button onClick={()=>add(d)}>+</button>
                   </td>
               </tr>))}
           </tbody>
       </table>
    )
}

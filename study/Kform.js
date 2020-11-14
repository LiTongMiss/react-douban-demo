import React, { Component } from 'react'
import {Input ,Button} from 'antd'



// 创建一个高阶组件：扩展现有表单，事件处理，数据收集效验
function kFormCreate(Comp){

   
    return class extends Component{
        constructor(props) {
            super(props)
            this.options ={}
            this.state = []
        }
        handleChange = (e)=>{
            const {name, value}= e.target
            this.setState({[name]: value},()=>{
                // 确保值发生变化后再调用
                this.validateField(name)
            })
        }
        // 单向校验
        validateField = filed =>{
            //   规则是数组
            const rules = this.oprion[field]= rules
            const ret = !rules.some(rule =>{
                if(rule.required){
                    if(!this.state[field]){
                        // 效验失败
                        this.setState({
                            [field+'message']: rule.message
                        }) 
                        return true
                    }
                }
            })
            if(ret){  // 校验成功
                this.setState({
                    [field+'message']: ''
                }) 
            }
            return ret
        }


        // 校验所有字段
        validate = cb =>{
            // 校验所有相
            const rets = Object.keys(this.options).map(field =>{
               return  this.validateField(field)
            })
            const ret = rets.every(v=>v==true)
            cb(ret, this.state)
        }
        // 创建input包装器
        getFieldDec = (filed, option) =>{
            // 保存当前输入项的配置
            this.option[filed] = option
            return InputComp =>(
                <div>
                    {/* 状态提升  提升到父组件处理change事件 */}
                    {React.cloneElement(InputComp, {
                        name: filed,
                        value: this.state[filed] || '',
                        onChange: this.handleChange       
                    })}
                    {/* 错误信息 */}
                    {this.state[field+'message'] &&(<p>{this.state[field+'message']}</p>)}
                </div>
            )
        }

            render() {
                return <Comp getFieldDec={this.getFieldDec} validate = {this.validate}></Comp>
            }
        }
}



@kFormCreate
class Kform extends Component {
    onSubmit = ()=>{
        // 校验所有相
        this.props.validate((isValid, data)=>{
            if(isValid){
                // 登录
            }else{
                // 失败
            }
        })
    }
    render() {
        const {getFieldDec} = this.props
        return (
            <div>
                {getFieldDec('uname',{
                    rule:[{required: true, message: '用户名必填'}]}
                )(<Input></Input>)}
                 {getFieldDec('pwd',{
                    rule:[{required: true, message: '用户名必填'}]}
                )(<Input type="password"></Input>)}
                <Button onClick={this.onSubmit}>登录</Button>
            </div>
        )
    }
}

export default Kform

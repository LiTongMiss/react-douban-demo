import React from 'react'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

function Home() {
    return <div>
        <h3>课程列表</h3>
        <ul>
            <li><Link to="/detatil/bb">架构师bb</Link></li>
            <li><Link to="/detatil/aa">架构师aa</Link></li>
        </ul>
    </div>
}



// 当前用户信息
function About() {
    return <div>
        <h3>个人中心</h3>
        <div>
            <Link to="/about/me">个人信息</Link>
            <Link to="/about/order">订单查询</Link>
        </div>
        <Switch>
            <Route path="/about/me" component={()=>(<div>me</div>  )}></Route>
            <Route path="/about/order" component={()=>(<div>order</div>  )}></Route>
            {/* 默认显示路由 */}
            <Redirect to="/about/me"></Redirect>
        </Switch>
    </div>
}

// 传进来的路由器对象
function Detail({history, match}) {
    // 路由对象  3个值
    // history  导航指令 history.back()
    // match  获取参数
    // location 当前url信息
    return <div>About 当前课程： {match.props.course}
        <button onClick={history.goBack}>后退</button>
    </div>
}

function NoMatch() {
    return <p></p>
}


// 路由守卫
// 用法  <PrivateRoute path='' ...>

const PrivateRoute = connect(state=>({isLogin:state.user.isLogin}))(
 ({component:Comp, isLogin, ...rest})=>{
    // 认证操作

    return (
        // render：根据条件动态渲染自减

        // component  与 render 有竞争关系   component优先级高于render
        <Route {...rest} render={
            props=> isLogin ? <Comp></Comp> :<Redirect to={{pathname:"/login", state:props.location.pathname}}></Redirect>
        }></Route>
    )
})


// 登录组件

// login   异步store dispatch   connect会注入属性  导入的方法

const Login = connect(
    state=>({
        isLogin:state.user.isLogin,
        loading: state.user.loading
    },{login})
) (({location, isLogin, login,loading})=> {
    const redirect = location.state.redirect
    if(isLogin){
        return <Redirect to={redirect}></Redirect>
    }
    return (
        <div>
            <p>用户登录</p>
            <button onClick={login}>登录</button>
        </div>
    )
})
// function Login

export default function RouteSample() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* 导航链接 */}
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/about">关于</Link>
                        </li>
                    </ul>
                    {/* 路由配置  路由即组件 */}
                    {/* 路由默认是包容性质  switch组件  只能选择一个路由显示 */}
                    <Switch>

                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        {/* 使用路由守卫 */}
                        <PrivateRoute path="/about" component={About}></PrivateRoute>
                        {/* 动态路由 */}
                        <Route path="/detail/:course" component={Detail}></Route>
                        
                        {/* 404页面  没有path 必然匹配 */}
                        <Route component={NoMatch}></Route>
                    </Switch>
                    
                </div>
            </BrowserRouter>
        </div>
    )
}

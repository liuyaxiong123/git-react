import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Item extends Component {
    navigatorTo() {
        this.props.history.push('/Ucenter/Jack');
    }
    render() {
        console.log(this.props, '哈哈');
        return (
            <div> Item组件 <button onClick={this.navigatorTo.bind(this)}>跳转到Ucenter</button> </div>
        )
    }
}
//高阶组件 当该组件不是被路由管理的组件时 我们无法获取到props路由相关的信息,可以withRouter将该组件转换为路由组件管理
export default withRouter(Item);

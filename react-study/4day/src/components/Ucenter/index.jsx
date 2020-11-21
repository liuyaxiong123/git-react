import React, { Component } from 'react'

class Ucenter extends Component{
    navigatorTo (){
        // this.props.history.goBack();
        // this.props.history.go(-1);
        //this.props.history.push('/home'); //跳转路由 会在浏览器中存储历史纪录
        this.props.history.replace('/home');//跳转路由 不会在浏览器中存储历史纪录
        // this.props.history.push({
        //     pathname:'/home',
        //     search:"?phone=10023423",
        //     hash:'#the-hash',
        //     state:{flag:true},
        //     query:{a:5}
        // })
    }
    render (){
        //console.log(this.props.location); //获取路径相关信息
        //console.log(this.props.match.params); //获取动态路由相关的信息
        return (
            <div>
                Ucenter页面
                <button onClick={this.navigatorTo.bind(this)}>跳转到Home</button>
            </div>
        )
    }
}
export default Ucenter;
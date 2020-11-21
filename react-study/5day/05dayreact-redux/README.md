redux:
公共数据做管理.
安装: cnpm install redux --save

import { createStore, combineReducers, applyMiddleware } from 'redux'
一 . store : 通过redux的createStore方法创建应用唯一的store对象,对象创建后(
    getState:获取状态,
    dispatch:发送action,
    subscribe:监听状态变态
)
    语法: const store = createStore(reducer,中间件)
二 . reducer : 设置默认状态以及对默认状态修改,
    它是一个函数,它接受 Action 和当前 State 作为参数(注意:state是只读的,不可以修改),返回一个新的 State
三 . actions : 发送命令,修改状态
    语法 : 
    store.dispatch({type:'INCREMENT',n:2});
四 . subscribe : 监听状态变化,状态改变了 会触发回调函数.
    语法 : 
    store.subscribe(callback)

react-redux : 



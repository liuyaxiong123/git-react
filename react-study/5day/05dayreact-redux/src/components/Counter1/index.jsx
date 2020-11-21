import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
//在使用redux时,在每次状态改变时可以在控制台输出 所改变的状态
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

//reducer : 设置默认状态以及对默认状态修改, Reducer 是一个函数，它接受 Action 和当前 State 作为参数(注意:state是只读的,不可以修改)，返回一个新的 State
const initState = { num: 0 };
const counter = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { num: state.num + action.n };
        case 'DECREMENT':
            return { num: state.num - action.n }
        default:
            return state;
    }
}

const listState = ['apple', 'banana', 'pear'];
const list = (state = listState, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.con]
        default:
            return state;
    }
}
//store : 存储数据,整个应用只能有一个 Store
/* 随着应用变得复杂,需要对reducer函数进行拆分,拆分后每一块独立管理state
的一部分, combineReducers函数,辅助函数的作用是 把一个由多个不同reducer函数作为value的object,合并成一个最终的reducer函数,合并后的reducer可以调用各个子reducer,并把他们的结果合并成为一个state对象,state对象的结构由传入的多个reduder的key决定.*/
const store = createStore(
    combineReducers({ counter, list }),
    composeWithDevTools(applyMiddleware(createLogger())) //使用中间件
);
//console.log(store.getState());


class Counter1 extends Component {
    componentDidMount() { //组件已经挂在完毕
        this.listen()
    }
    state = {
        num: store.getState().counter.num,
        list: store.getState().list,
        value: ''
    }
    increment = () => {
        //发送actions
        store.dispatch({ type: 'INCREMENT', n: 2 });
    }
    decrement = () => {
        store.dispatch({ type: 'DECREMENT', n: 3 });
    }
    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    addValue = () => {
        console.log(this.state.value);
        //发送actions
        store.dispatch({ type: 'ADD', con: this.state.value });
    }
    listen() {
        //Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({
                num: store.getState().counter.num,
                list: store.getState().list,
                value: ''
            })
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <span>{this.state.num}</span>
                <button onClick={this.decrement}>-</button>
                <br />
                <input type="text" value={this.state.value} onChange={this.change} />
                <button onClick={this.addValue}>添加</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Counter1;
import React, { Component, useState, useEffect } from 'react'
/*
class Hook2 extends Component {
    state = {
        num: 0,
        name:'Ada'
    }
    componentDidMount (){
        document.title = `You clicked ${this.state.num} times`;
    }
    componentDidUpdate (prevProps,prevState){
        if( prevState.num == this.state.num ) return;
        console.log(prevState);
        document.title = `You clicked ${this.state.num} times`;
    }
    setNum = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <div>
                <p>You clicked {this.state.num} times</p>
                <button onClick={this.setNum}>Click me</button>
                <p>{this.state.name}</p>
                <button onClick={()=>{this.setState({name:'Jack'})}}>Click me</button>
            </div>
        )
    }
}
export default Hook2;
*/
/**/
const Hook2 = () => {
    const [num, setNum] = useState(0);
    const [name,setName] = useState('Ada');
    // 相当于 componentDidMount 和 componentDidUpdate 和 componentWillUnmount 三个生命周期函数.
    // 1.如果第二个参数添加了[],只代表componentDidMount
    // 2.如果添加返回值函数,返回的函数相当于 componentWillUnmount
    // 3.如果第二个参数[]内有状态变量,那么componentDidUpdate会在该状态更新时触发.
    // 4.注意:useEffect一定要放在函数顶层.
    // if(true){ useEffect()  报错 }
    useEffect(()=>{
        document.title = `You clicked ${num} times`;
        let timer = setInterval(function (){
            console.log('haha');
        },2000)
        return ()=>{
            clearInterval(timer);
        }
    },[num])
    return (
        <div>
            <p>You clicked {num} times</p>
            <button onClick={() => (setNum(num + 1))}>Click me</button>
            <p>{name}</p>
            <button onClick={()=>(setName('Jack'))}>修改name</button>
        </div>
    )
}
export default Hook2;

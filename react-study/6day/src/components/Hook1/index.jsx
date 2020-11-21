import React, { Component, useState } from 'react'

/*
class Hook1 extends Component{
    state = {
        a:5
    }
    render (){
        return (
         <div >{this.state.a}</div>
        )
    }
}
export default Hook1;
*/

/*支持16.8以上react版本*/
const Hook1 = (props) => {
    /*
        count : 代表的是状态
        setCount : 修改状态的方法
        useState(1) : 1 为默认值
    */
    const [count,setC] = useState(0);
    const [name,setName] = useState({name:'Ada'});
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>(setC(count+1))}>修改countt</button>
            <p>{name.name}</p>
            <button onClick={()=>(setName({name:'Jack'}))}>修改name</button>
        </div>
    )
}
export default Hook1;
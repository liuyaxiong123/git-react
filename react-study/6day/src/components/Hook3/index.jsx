import React, { Component, useState, useEffect } from 'react'

let userSet = ['张三', '李四', '王武'];
/*
class Hook3 extends Component{
    state = {
        user:userSet[0]
    }
    changeUser = () => {
        let randomIndex = Math.floor(Math.random() * userSet.length);
        let val = userSet[randomIndex];
        this.setState({
            user:val
        })
    }
    render (){
        return (
            <div>
                <span>{this.state.user}</span>
                <button onClick={this.changeUser}>切换</button>
            </div>
        )
    }
}
export default Hook3;
*/
export default () => {
    const [user, changeUser] = useState(userSet[0]);
    let generateUser = () => {
        let randomIndex = Math.floor(Math.random() * userSet.length);
        changeUser(userSet[randomIndex]);
    }
    return (
        <div>
            <span>{user}</span>
            <button onClick={generateUser}>切换</button>
        </div>
    )
}

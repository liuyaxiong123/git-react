import React, { Component } from 'react'
import { Redirect, Prompt } from 'react-router-dom'

class Mine extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: false,
            name:''
        }
    }
    render() {
        let { isLogin } = this.state;
        return (
            <div>
                {
                    isLogin
                    ?
                    <div>我的信息页面</div>
                    :
                    <div>
                        <input type="text" value={this.state.name} onChange={(e)=>{
                            this.setState({name:e.target.value})
                        }}/>
                        <button onClick={()=>{
                            this.props.history.push('/');
                        }}>搜索</button>
                        <Prompt when={!this.state.name} message='内容为空,确定要离开?' />
                        {/* <Redirect to='/' /> */}
                    </div>
                }
            </div>
        )
    }
}
export default Mine;
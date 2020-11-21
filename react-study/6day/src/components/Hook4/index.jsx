import React, { Component, useState, useEffect } from 'react'

class FormSub extends Component {
    handlerSubmit = (e) => {
        e.preventDefault();
        //console.log(this.input.value);
        const { setToken } = this.props;
        const token = this.input.value;
        setToken(token);
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <input type="text" name='token' placeholder='enter your name' ref={(input) => { this.input = input; console.log(input) }} />
            </form>
        )
    }
}
/*
export default class Hook4 extends Component {
    state = {
        token: null
    }
    componentDidMount() {
        this.setState({
            token: sessionStorage.getItem('token')
        })
    }
    setToken = (token) => {
        console.log(token);
        sessionStorage.setItem('token', token);
        this.setState({ token })
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <span>
                    {
                        this.state.token ?
                            this.state.token
                            :
                            <FormSub setToken={this.setToken} />
                    }
                </span>
            </div>
        )
    }
};
*/
export default () => {
    const [token,setToken] = useState(sessionStorage.getItem('token'));
    useEffect(()=>{
        sessionStorage.setItem('token',token);
    })
    return (
        <div>
            <h1>Hello</h1>
            <span>
                {
                    token 
                    ?
                    token
                    :
                    <FormSub setToken={setToken} />
                }
            </span>
        </div>
    )
}
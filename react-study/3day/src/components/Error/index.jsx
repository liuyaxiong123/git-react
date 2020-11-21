import React, { Component } from 'react'
class Error extends Component {
    constructor() {
        super();
        this.state = { 
            hasError: false 
        };
    }
    static getDerivedStateFromError(error) {
        console.log(error);
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log(error,errorInfo);
    }
    render() {
        return (
            <div>
                {
                    this.state.hasError 
                    ?
                    <div>{this.props.errorInfo}</div>
                    :
                    this.props.children
                }
            </div>
        )
    }
}
export default Error;
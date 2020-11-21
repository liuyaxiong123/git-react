import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    increment,
    decrement
} from '@/store/actions/counter.js'

class Counter extends Component {
    render() {
        //console.log(this.props);
        let { increment, decrement, num } = this.props;
        return (
            <div>
                Counter
                <button onClick={() => { increment() }}>+</button>
                <span>{num}</span>
                <button onClick={() => { decrement() }}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log(state); {counter:{num:1}}
    return {
        num: state.counter.num
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //increment()  {type:'increment'} dispatch({type:'increment'})
        increment: () => { dispatch(increment()) },
        decrement: () => { dispatch(decrement()) }
    }
}
//<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
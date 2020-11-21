import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/store/actions/counter.js'
class Counter2 extends Component {
    render() {
        console.log(this.props);
        let { num } = this.props;
        let { increment, decrement } = this.props.counterActions;
        return (
            <div>
                Counter2
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
        //目的就是可以把所有actions合并到一块 简化我们映射dispath方法的语法(把一个 value 为不同 action creator 的对象，转成拥有同名 key 的对象。同时使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们。)
        counterActions: bindActionCreators(Actions, dispatch)
    }
}
//<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter2);
import {
    INCREMENT,
    DECREMENT
} from '@/store/actionType'
//educer : 设置默认状态以及对默认状态修改, Reducer 是一个函数，它接受 Action 和当前 State 作为参数(注意:state是只读的,不可以修改)，返回一个新的 State
const initState = { num: 1 }
//当前State 分发action
export default (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { num: state.num + 1 }
        case DECREMENT:
            return { num: state.num - 1 }
        default:
            return state;
    }
}
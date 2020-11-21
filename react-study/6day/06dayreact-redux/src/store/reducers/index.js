import { combineReducers } from 'redux'
import counter from './counter.js'
import list from './list.js'
/* 随着应用变得复杂,需要对reducer函数进行拆分,拆分后每一块独立管理state
的一部分, combineReducers函数,辅助函数的作用是 把一个由多个不同reducer函数作为value的object,合并成一个最终的reducer函数,合并后的reducer可以调用各个子reducer,并把他们的结果合并成为一个state对象,state对象的结构由传入的多个reduder的key决定.*/
const rootReducer = combineReducers({
    counter,
    list
})
export default rootReducer;
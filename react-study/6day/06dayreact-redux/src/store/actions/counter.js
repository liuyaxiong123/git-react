import {
    INCREMENT,
    DECREMENT
} from '@/store/actionType'
export const increment = () => {
    //异步action
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: INCREMENT })
        }, 2000)
    }
    //同步action
    /*
    return {
        type: INCREMENT
    }
    */
}
export const decrement = () => ({ type: DECREMENT })


import {
    INIT
} from '@/store/actionType'

export default (state = {}, action) => {
    switch (action.type) {
        case INIT:
            return action.con;
        default:
            return state;
    }
}

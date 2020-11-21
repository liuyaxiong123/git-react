import {
    INIT,
    ADD
} from '@/store/actionType'

export const init = () => {
    //异步的 action
    return async (dispatch) => {
        let result = await fetch('https://geoapi.heweather.net/v2/city/top?key=9156f82f91b64b8baf95d621cb3926d1').then(data=>data.json());
        dispatch({
            type:INIT,
            con:result
        })
    }
    //同步action
    //return {type:INIT}
}
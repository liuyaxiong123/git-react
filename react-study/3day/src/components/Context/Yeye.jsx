import React, { Component } from 'react'
import Erzi from './Erzi.jsx'

//Provider : 发布数据  Consumer : 使用数据
export const { Provider, Consumer } = React.createContext();

class Yeye extends Component {
    render() {
        return (
            <Provider value={{name:'Jack',age:20}}>
                <div>
                    爷爷组件
                    <Erzi />
                </div>
            </Provider>
        )
    }
}
export default Yeye;
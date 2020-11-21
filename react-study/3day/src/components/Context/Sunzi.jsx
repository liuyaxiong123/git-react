import React, { Component } from 'react'

import { Consumer } from './Yeye.jsx'; //引入爷爷组件的Consumer容器
class Sunzi extends Component {
    render() {
        return (
            <Consumer>
                {
                    (context) => (
                        <div>
                            孙子组件 {context.name} , {context.age}
                        </div>
                    )
                }
            </Consumer>
        )
    }
}
export default Sunzi;
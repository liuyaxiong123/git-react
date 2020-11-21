import React, { Component } from 'react'
import Sunzi from './Sunzi.jsx'
import { Consumer } from './Yeye.jsx'; //引入爷爷组件的Consumer容器
class Erzi extends Component {
    render() {
        return (
            <Consumer>
                {
                    (context) => (
                        <div>
                            儿子组件 {context.name} , {context.age}
                            <Sunzi />
                        </div>
                    )
                }
            </Consumer>  
        )
    }
}
export default Erzi;
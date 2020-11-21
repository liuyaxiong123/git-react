import React, { Component, Fragment } from 'react'
//Fragment 可以为一组元素提供一个父节点 并不会渲染到DOM中
class Item extends Component {

    render() {
        let arr = ['苹果', '香蕉', '山竹', '荔枝'];
        return (
            // <Fragment key={1}>
            //     {
            //         arr.map((item, index) => {
            //             return <td key={index}>{item}</td>
            //         })
            //     }
            // </Fragment>
            <>
                {
                    arr.map((item, index) => {
                        return <td key={index}>{item}</td>
                    })
                }
            </>
        )
    }
}
export default Item;
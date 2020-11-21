import React, { Component } from 'react'
import Item from './Item.jsx'
class Fragments extends Component {
    render() {
        return (
            <div>
                表格:
                <table>
                    <tbody>
                        <tr>
                          <Item />  
                        </tr>
                    </tbody> 
                </table>
                {
                    null.map((item)=>{
                        return item;
                    })
                }
            </div>
        )
    }
}
export default Fragments;
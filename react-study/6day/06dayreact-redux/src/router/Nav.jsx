import { Link } from 'react-router-dom'
import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to='/counter'>Counter</Link>
                </li>
                <li>
                    <Link to='/counter2'>Counter2</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
            </ul>
        )
    }
}
export default Nav;
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    {/* <Link to='/home'>Home页面</Link> */}
                    <NavLink activeClassName='select' to='/home'>Home页面</NavLink>
                </li>
                <li>
                    {/* <Link to='/mine'>Mine页面</Link> */}
                    <NavLink activeStyle={{fontSize:'25px',color:'blue'}} to='/mine'>Mine页面</NavLink>
                </li>
                <li>
                    {/* <NavLink to='/ucenter/10003/Ada'>Ucenter页面</NavLink> */}
                    <NavLink to={{
                        pathname:'/ucenter/10003/Ada',
                        search:"?phone=10023423",
                        hash:'#the-hash',
                        state:{flag:true},
                        query:{a:5}
                    }}>Ucenter页面</NavLink>
                </li>
            </ul>
        )
    }
}
export default Nav;
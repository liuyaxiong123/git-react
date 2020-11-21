import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Mine from '../components/Mine'
import NotFound from '../components/NotFound'
import Ucenter from '../components/Ucenter'

//简易组件
let Demo = (props)=>(<div>demo页面{props.name}</div>);

export default () => (
    <Router>
        <Nav />
        {/* Switch:使用404组件 必须添加Switch 用于渲染与路径匹配的第一个子 Route */}
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            <Route exact strict path='/mine' component={Mine}></Route>
            {/* <Route path='/demo' component={Demo}></Route> */}
            <Route path='/demo' component={()=>(<Demo name='Ada' />)}></Route>
            <Route path='/ucenter/:id?/:name' component={Ucenter}></Route>
            <Redirect from='/hellomine' to='/' />
            <Route path='*' component={NotFound}></Route>
        </Switch>
    </Router>
)

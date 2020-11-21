import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Counter from '@/components/Counter'
import Counter2 from '@/components/Counter2'
import List from '@/components/List'
import Nav from './Nav.jsx'

class RootRouter extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Counter}></Route>
                    <Route path='/counter' component={Counter}></Route>
                    <Route path='/counter2' component={Counter2}></Route>
                    <Route path='/list' component={List}></Route>
                </Switch>
            </Router>
        )
    }
}
export default RootRouter;
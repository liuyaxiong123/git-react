import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Hook1 from '../components/Hook1'
import Hook2 from '../components/Hook2'
import Hook3 from '../components/Hook3'
import Hook4 from '../components/Hook4'
class AppRouter extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/hook1'>Hook1</Link>
                    </li>
                    <li>
                        <Link to='/hook2'>Hook2</Link>
                    </li>
                    <li>
                        <Link to='/hook3'>Hook3</Link>
                    </li>
                    <li>
                        <Link to='/hook4'>Hook4</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/' component={()=>(<Hook1 a={6} />)}></Route>
                    <Route path='/hook1'>
                        <Hook1 a={5} />
                    </Route>
                    <Route path='/hook2' component={Hook2}></Route>
                    <Route path='/hook3' component={Hook3}></Route>
                    <Route path='/hook4' component={Hook4}></Route>
                </Switch>
            </Router>
        )
    }
}
export default AppRouter;
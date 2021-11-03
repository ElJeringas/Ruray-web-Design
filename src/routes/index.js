import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Login from '../pages/login/Login';
import Register from '../pages/createUser/Register';
import CreateStore from '../pages/store/createStore';
import { Home } from '../pages/home/home';

export default ()=> (
    //add the url of login/register, feed, product, profile,etc
    <Router>
        <Switch>
        <Route path ="/" exact component={Login} />
        <Route path ="/register" exact component={Register}/>
        <Route path ="/createstore" exact component={CreateStore}/>
        <Route path ="/home" exact component={Home}/>
        </Switch>
    </Router>
)
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Login from '../pages/login/Login';
import Register from '../pages/createUser/register';
import Home from '../pages/home/Home';

export default ()=> ( 
    //add the url of login/register, feed, product, profile,etc
    <Router>
        <Switch>
        <Route path ="/" exact component={Login} />
        <Route path ="/register" exact component={Register}/> 
        </Switch>
    </Router>
)
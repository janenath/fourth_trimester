import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  withRouter
} from "react-router-dom";
import { Provider, connect } from 'react-redux'


import Splash from '../components/Splash'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import About from '../components/About'
import Landing from '../components/Landing'
import Today from '../components/Today'
import AllArticles from '../components/AllArticles'
import Screening from '../components/Screening'
import LogOut from '../components/LogOut'
import NotFound from '../components/NotFound'

import LoggedInRoute from '../routes/LoggedInRoute'
import LoggedOutRoute from '../routes/LoggedOutRoute'

const Pages = () => {
    return(
        <Switch>
            <LoggedOutRoute path="/" exact={true} component={Splash}/>
            <LoggedOutRoute path="/login" exact={true} component={LogIn}/>
            <LoggedOutRoute path="/signup" exact={true} component={SignUp}/>
            <LoggedInRoute path="/home" exact={true} component={Home}/>
            <LoggedInRoute path="/landing" exact={true} component={Landing}/>
            <LoggedInRoute path="/today" exact={true} component={Today}/>
            <LoggedInRoute path="/about" exact={true} component={About}/>
            <LoggedInRoute path="/topics" exact={true} component={AllArticles}/>
            <LoggedInRoute path="/screening" exact={true} component={Screening}/>
            <LoggedInRoute path="/logout" exact={true} component={LogOut}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Pages;
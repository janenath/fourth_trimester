import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  withRouter,
  useHistory
} from "react-router-dom";
import { Provider, connect } from 'react-redux'

import Splash from '../components/Splash'
import history from '../history'
import LoggedInRoute from './LoggedInRoute'

const LoggedOutRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}) => {
    console.log('isAuthenticated')
    if (isAuthenticated === true) {
        history.push(LoggedInRoute);
    } 
    return (
        <Route
            render={otherProps => (
                <Splash {...otherProps} />
            )} 
        />
)
}

function mapStateToProps(state) {
    const { auth } = state
    const { isAuthenticated, errorMessage } = auth
  
    return {
      isAuthenticated,
      errorMessage
    }
  }

export default connect(
    mapStateToProps
)(LoggedOutRoute);
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

import history from '../history'
import Home from '../components/Home'
import LoggedOutRoute from './LoggedOutRoute'

const LoggedInRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}) => {
    if (isAuthenticated === false) {
        history.push(LoggedOutRoute);
    }
    return (
        <Route
            render={otherProps => (
                <Home {...otherProps} />
            )} 
        />
)}

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
)(LoggedInRoute);
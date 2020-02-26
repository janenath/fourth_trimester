import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types'
import { logoutUser } from '../actions/userActions'

import LoggedOutRoute from '../routes/LoggedOutRoute'

export default class LogOut extends Component {
    render() {
        const { errorMessage } = this.props
        return (
            <div>
                <h1>log out</h1>
                <button onClick={(event) => this.handleClick(event)}>log out</button>
            </div>
        )  
}

handleClick(event) {
    this.props.onLogoutClick()
    // console.log(this.props)
  }
}


logoutUser.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types'
import { logoutUser } from '../actions/userActions'


export default class LogOut extends Component {
    render() {
        const { errorMessage } = this.props
        return (
            <main>
                <button onClick={(event) => this.handleClick(event)}>confirm log out</button>
            </main>
        )  
}

handleClick(event) {
    this.props.onLogoutClick()
  }
}


logoutUser.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
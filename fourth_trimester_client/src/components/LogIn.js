import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types'
import { loginUser } from '../actions/userActions'

export default class LogIn extends Component {
    render() {
        const { errorMessage } = this.props
        return (
            <div className="LogIn Container">
                <h1>Log In</h1>
                <input type='text' ref='username' className="form-control" placeholder='Username'/>
                <input type='password' ref='password' className="form-control" placeholder='Password'/>
                <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
                Login
                </button>
                <Link to="/signup">Sign Up</Link>
                {errorMessage &&
                    <p>{errorMessage}</p>
                }
            </div>
        )  
}

handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
    // console.log(this.props)
  }
}

loginUser.PropTypes = {
  loginUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
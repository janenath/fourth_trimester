import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { Provider, connect } from 'react-redux'
import logo from '../header_logo.svg'

import { loginUser, signupUser } from '../actions/userActions'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'

class Splash extends Component {
    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props
        return(
        <main className="splashContainer">
            <img src={logo}/>
            <div className="splashAuth">
                <NavLink to="/login">log in</NavLink>
                <NavLink to="/signup" className="signUp">sign up</NavLink>
            </div>
            <Switch>
                <Route path="/login">
                    <LogIn 
                        isAuthenticated={!isAuthenticated}
                        errorMessage={errorMessage}
                        onLoginClick={ creds => dispatch(loginUser(creds)) }
                    />
                </Route>
                <Route path="/signup">
                    <SignUp
                        isAuthenticated={!isAuthenticated}
                        errorMessage={errorMessage}
                        onSignupClick = {creds => dispatch(signupUser(creds)) }
                    />
                </Route>
            </Switch>
        </main>
        )
    }
}

function mapStateToProps(state) {

    const { auth } = state
    const { isAuthenticated, errorMessage } = auth
  
    return {
      isAuthenticated,
      errorMessage
    }
  }
  
export default connect(mapStateToProps)(Splash)

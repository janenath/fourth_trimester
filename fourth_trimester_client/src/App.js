import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider, connect } from 'react-redux'
import { loginUser } from './actions/userActions'

import './App.css'

import About from './components/About'
import Landing from './components/Landing'
import ToDo from './components/ToDo'
import AllArticles from './components/AllArticles'
// import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import store from './store'


class App extends Component {
  render(){
  const { dispatch, isAuthenticated, errorMessage } = this.props
  return (
    <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/articles">articles</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/login">log in</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path = "/landing">
            <Landing />
            <Link to="/todo">ready</Link>
          </Route>
          <Route path = "/todo">
            <ToDo />
          </Route>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/articles">
            <AllArticles />
          </Route>
          {/* <Route path = "/profile">
            <UserProfile />
          </Route> */}
          <Route path = "/login">
            <LogIn 
              isAuthenticated={!isAuthenticated}                
              errorMessage={errorMessage}
              onLoginClick={ creds => dispatch(loginUser(creds)) }/>
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
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

export default connect(mapStateToProps)(App)

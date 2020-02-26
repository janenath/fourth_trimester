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

import './App.css'

import history from './history'
import Pages from './routes/Pages'
import Splash from './components/Splash'

import store from './store'

class App extends Component {
  render(){
  const { dispatch, isAuthenticated, errorMessage } = this.props
  console.log(isAuthenticated)

  const app = isAuthenticated !== null ? (
    <Provider store={store}>
      <Router history={history}>
        <Route component={Pages}/>
      </Router>
    </Provider>
  ) : null;
  return (
    <div className = "siteContainer">
        {app}
    </div>
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

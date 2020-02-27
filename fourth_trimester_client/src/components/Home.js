import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";

import { Provider, connect } from 'react-redux'

import logo from '../header_logo.svg'

import Landing from './Landing'
import Today from './Today'
import About from './About'
import AllArticles from './AllArticles'
import Screening from './Screening'
import LogOut from './LogOut'
import Splash from './Splash'


import { logoutUser } from '../actions/userActions'

class Home extends Component {
    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props
        return (
            <div>
                {this.props.isAuthenticated === false && <Splash/>}
                {this.props.isAuthenticated === true && 
                            <div className="homeContainer">
                            <nav>
                                <div className="logoContainer">
                                    <img className="headerLogo" src={logo} alt="headerLogo"/>
                                </div> 
                                <ul>
                                    <li>
                                    <NavLink to="/home">home</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/about">about</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/topics">topics</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/screening">screening</NavLink>
                                    </li>
                                </ul>
                                <div className="authContainer">
                                    <div className="authLink"><NavLink to="/logout">log out</NavLink></div>
                                </div>
                            </nav>
                        <Switch>
                            <Route exact path = "/home">
                                <Landing />
                            </Route>
                            <Route path = "/today">
                                <Today />
                            </Route>
                            <Route path = "/about">
                                <About />
                            </Route>
                            <Route path = "/topics">
                                <AllArticles />
                            </Route>
                            <Route path = "/screening">
                                <Screening />
                            </Route>
                            <Route path = "/logout">
                                <LogOut 
                                    isAuthenticated={!isAuthenticated}
                                    errorMessage={errorMessage}
                                    onLogoutClick={ event => dispatch(logoutUser()) }/>
                            </Route>
                        </Switch>
                        </div>
                
                }
            
            </div>
        )
    }
}


function mapStateToProps(state) {

    const { auth, data } = state
    const { isAuthenticated, errorMessage } = auth
  
    return {
      isAuthenticated,
      errorMessage,
      data
    }
  }
  
export default connect(mapStateToProps)(Home)
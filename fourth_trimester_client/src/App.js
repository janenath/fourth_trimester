import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

import Splash from './components/Splash'
import Landing from './components/Landing'
import Today from './components/Today'
import About from './components/About'
import AllArticles from './components/AllArticles'
import Screening from './components/Screening'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import CreateUser from './components/CreateUser'

import logo from './header_logo.svg'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            currentUser: null,
            articles: []
        }
    }
    render(){
        return(
            <div>
                {this.state.currentUser === null && <Splash />}
                {this.state.currentUser && 
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
                    </div>
                }
                <Switch>
                    <Route exact path = "/">
                        <Splash />
                    </Route>
                    <Route exact path = "/home">
                        <Landing />
                    </Route>
                    <Route exact path = "/today">
                        <Today />
                    </Route>
                    <Route exact path = "/about">
                        <About />
                    </Route>
                    <Route exact path = "/topics">
                        <AllArticles />
                    </Route>
                    <Route exact path = "/screening">
                        <Screening />
                    </Route>
                    <Route exact path = "/login">
                        <LogIn />
                    </Route>
                    <Route exact path = "/logout">
                        <LogOut />
                    </Route>
                    <Route exact path = "/create">
                        <CreateUser />
                    </Route>
                </Switch>
            </div>


        )
    }
}

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import About from './components/About';
import Landing from './components/Landing';
import ToDo from './components/ToDo';
import AllArticles from './components/AllArticles';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
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
          <Route path = "/profile">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

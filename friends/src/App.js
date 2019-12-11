import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login.js'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute.js'


function App() {
  return (
    <Router>
      <section className="app-container">
        <Switch>
          <PrivateRoute exact path='friendlist' component={FriendList} />
          <Route component={Login} />
        </Switch>
      </section>
    </Router>
  )
}

export default App;
